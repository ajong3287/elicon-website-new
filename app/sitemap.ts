import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://elicon.co.kr'; // 실제 도메인으로 변경 필요

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2025-12-10'), // OGK 인사이트 적용일
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/brands`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/brands/wing`,
      lastModified: new Date('2025-12-10'), // OGK 인사이트 적용일
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/brands/cocolic`,
      lastModified: new Date('2025-12-10'), // OGK 인사이트 적용일
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/brands/seanex`,
      lastModified: new Date('2025-12-10'), // OGK 인사이트 적용일
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/partnership`,
      lastModified: new Date('2025-12-10'), // OGK 인사이트 적용일
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/b2c-shop`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ];
}
