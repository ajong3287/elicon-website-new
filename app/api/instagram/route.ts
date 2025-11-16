import { NextRequest, NextResponse } from 'next/server';

interface InstagramPost {
  id: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
  timestamp: string;
}

interface InstagramResponse {
  data: InstagramPost[];
  paging?: {
    cursors: {
      before: string;
      after: string;
    };
    next?: string;
  };
}

let cache: {
  [username: string]: {
    data: InstagramPost[];
    timestamp: number;
  };
} = {};

const CACHE_DURATION = 3600000;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username') || 'elicon_official';
    const limit = parseInt(searchParams.get('limit') || '6', 10);

    const now = Date.now();
    if (cache[username] && now - cache[username].timestamp < CACHE_DURATION) {
      return NextResponse.json({
        success: true,
        data: cache[username].data.slice(0, limit),
        source: 'cache',
      });
    }

    const accessToken = process.env[`INSTAGRAM_ACCESS_TOKEN_${username.toUpperCase().replace(/@/g, '')}`];

    if (!accessToken) {
      console.warn(`Instagram access token not found for ${username}`);
      return NextResponse.json({
        success: false,
        error: 'Instagram API 토큰이 설정되지 않았습니다',
        data: getMockData(username, limit),
      });
    }

    const apiUrl = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink,caption,timestamp&limit=${limit}&access_token=${accessToken}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`);
    }

    const result: InstagramResponse = await response.json();

    cache[username] = {
      data: result.data,
      timestamp: now,
    };

    return NextResponse.json({
      success: true,
      data: result.data,
      source: 'api',
    });
  } catch (error) {
    console.error('Instagram API Error:', error);

    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username') || 'elicon_official';
    const limit = parseInt(searchParams.get('limit') || '6', 10);

    return NextResponse.json({
      success: false,
      error: 'Instagram 피드를 불러올 수 없습니다',
      data: getMockData(username, limit),
    });
  }
}

function getMockData(username: string, limit: number): InstagramPost[] {
  const mockPosts: InstagramPost[] = [
    {
      id: '1',
      media_type: 'IMAGE',
      media_url: '/images/instagram/mock-1.jpg',
      permalink: `https://instagram.com/${username}/p/mock1`,
      caption: `${username} 최신 소식을 확인하세요!`,
      timestamp: new Date().toISOString(),
    },
    {
      id: '2',
      media_type: 'IMAGE',
      media_url: '/images/instagram/mock-2.jpg',
      permalink: `https://instagram.com/${username}/p/mock2`,
      caption: '새로운 제품을 소개합니다',
      timestamp: new Date().toISOString(),
    },
    {
      id: '3',
      media_type: 'IMAGE',
      media_url: '/images/instagram/mock-3.jpg',
      permalink: `https://instagram.com/${username}/p/mock3`,
      caption: '브랜드 스토리',
      timestamp: new Date().toISOString(),
    },
    {
      id: '4',
      media_type: 'IMAGE',
      media_url: '/images/instagram/mock-4.jpg',
      permalink: `https://instagram.com/${username}/p/mock4`,
      caption: '고객 후기',
      timestamp: new Date().toISOString(),
    },
    {
      id: '5',
      media_type: 'IMAGE',
      media_url: '/images/instagram/mock-5.jpg',
      permalink: `https://instagram.com/${username}/p/mock5`,
      caption: '이벤트 안내',
      timestamp: new Date().toISOString(),
    },
    {
      id: '6',
      media_type: 'IMAGE',
      media_url: '/images/instagram/mock-6.jpg',
      permalink: `https://instagram.com/${username}/p/mock6`,
      caption: '신제품 출시',
      timestamp: new Date().toISOString(),
    },
  ];

  return mockPosts.slice(0, limit);
}
