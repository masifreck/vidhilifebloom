export default function robots() {
  const baseUrl = 'https://vlhpl.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },

    sitemap: `${baseUrl}/sitemap.xml`,
  };
}