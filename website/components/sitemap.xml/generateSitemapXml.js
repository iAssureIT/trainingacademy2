import { SitemapStream, streamToPromise } from 'sitemap';
import { createGzip } from 'zlib';

const generateSitemapXml = async () => {
  try {
    const smStream = new SitemapStream({
      hostname: process.env.HOSTNAME, // Replace with your website's base URL
      cacheTime: 600000, // 600 seconds (10 minutes) cache purge period
    });

    const routes = [
      { url: '/', changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
      { url: '/contact-us', changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
      { url: '/about-us', changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
      // Add more routes as needed
    ];

    routes.map((route) => {
      smStream.write(route);
    });

    smStream.end();
    const sitemap = (await streamToPromise(smStream)).toString();

    return sitemap;
  } catch (error) {
    console.error(error);
    return '';
  }
};

export default generateSitemapXml;
