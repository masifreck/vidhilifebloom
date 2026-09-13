import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.vidhilifebloom.com';
  const currentDate = new Date().toISOString();

  return [
    { url: baseUrl, lastModified: currentDate, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/become-member`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/terms-conditions`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/privacy-policy`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/cancellation-policy`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
  ];
}