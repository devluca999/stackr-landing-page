import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // Explicitly allow AI crawlers
      { userAgent: 'GPTBot',        allow: '/' },
      { userAgent: 'ChatGPT-User',  allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Googlebot',     allow: '/' },
      { userAgent: 'anthropic-ai',  allow: '/' },
    ],
    sitemap: 'https://stackr-online.com/sitemap.xml',
    host:    'https://stackr-online.com',
  };
}
