import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://elicon.co.kr'; // 실제 도메인으로 변경 필요

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/static/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 2,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
