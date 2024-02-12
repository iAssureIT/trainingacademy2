import { MetadataRoute } from 'next/data-sitemap';
const baseurl= process.env.hostname

const sitemapData = [
    {
      url: baseurl+'/',
      lastMod: new Date().toISOString(),
    },
    {
      url: baseurl+'/about',
      lastMod: new Date().toISOString(),
      priority: 0.7,
    },
    // Add more pages and metadata as needed...
  ];

  export default function Sitemap() {
    return (
      <MetadataRoute>
        {sitemapData.map((page) => (
          <url
            key={page.url}
            loc={page.url}
            lastmod={page.lastMod}
            changefreq={page.changefreq}
            priority={page.priority}
          />
        ))}
      </MetadataRoute>
    );
  }