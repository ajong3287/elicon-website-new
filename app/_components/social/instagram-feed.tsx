'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface InstagramPost {
  id: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
  timestamp: string;
}

interface InstagramFeedProps {
  username?: string;
  limit?: number;
  title?: string;
}

export default function InstagramFeed({
  username = 'elicon_official',
  limit = 6,
  title = '인스타그램에서 만나보세요',
}: InstagramFeedProps) {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/instagram?username=${username}&limit=${limit}`
        );
        const result = await response.json();

        if (result.data) {
          setPosts(result.data);
        } else {
          setError(result.error || '피드를 불러올 수 없습니다');
        }
      } catch (err) {
        setError('피드를 불러오는 중 오류가 발생했습니다');
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [username, limit]);

  if (loading) {
    return (
      <section className="py-16 bg-[--color-soft-gray]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[--color-charcoal] mb-8 text-center">
            {title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(limit)].map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-gray-200 rounded-lg animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || posts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-[--color-soft-gray]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[--color-charcoal] mb-4 text-center">
          {title}
        </h2>
        <p className="text-center text-gray-600 mb-8">
          <a
            href={`https://instagram.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[--color-bright-teal] hover:underline font-semibold"
          >
            @{username}
          </a>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={
                  post.media_type === 'VIDEO'
                    ? post.thumbnail_url || post.media_url
                    : post.media_url
                }
                alt={post.caption || 'Instagram post'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                  <p className="text-sm line-clamp-3">
                    {post.caption || '자세히 보기'}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href={`https://instagram.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[--color-bright-teal] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#00A893] transition-colors"
          >
            인스타그램에서 더 보기
          </a>
        </div>
      </div>
    </section>
  );
}
