import { SitemapStream, streamToPromise } from 'sitemap';
import { createGzip }                     from 'zlib';

const generateSitemapXml = async () => {
  try {
  console.log("process.env.hostname 0",process.env.hostname)
  const smStream = new SitemapStream({
      hostname: process.env.hostname,
      cacheTime: 600000,  
    });
    const routes=[
      { url: '/', changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
      { url: '/contact-us', changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
      { url: '/about-us', changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
      { url: '/blogs', changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
      //services
      { url: "/services/mobile-app-development", changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
      { url: "/services/web-app-development", changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
      { url: "/services/e-comm-online-store-development", changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
      { url: "/services/ui-ux-development", changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
      { url: "/services/application-modernization", changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
      { url: "/services/enhance-user-digital-experience", changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
      { url: "/services/manual-documents-to-digital-assets", changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
      { url: "/services/develop-digital-strategy-and-digital-applications", changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
      { url: "/services/customer-service-automation", changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
      { url: "/services/document-processing-and-report-automation", changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
      { url: "/services/data-migration-entry", changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
      { url: "/services/infrastructure-architech-selection", changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
      { url: "/services/it-operation-mgmt", changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
      { url: "/services/information-security", changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
      { url: "/services/network-security", changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
      { url: "/services/cloud-security", changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
      { url: "/services/manual-functional-testing", changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
      { url: "/services/automation-testing", changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
      { url: "/services/performance-testing", changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
      { url: "/services/security-testing", changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
    ];

    routes.map((a)=>{
      smStream.write(a);
    })
    smStream.end();
    const sitemap = (await streamToPromise(smStream)).toString();

    return sitemap;
  } catch (error) {
    console.error(error);
    return '';
  }
};

export default function SitemapXml() {
  console.log("process.env.hostname 1",process.env.hostname)

//   return generateSitemapXml(); 
// }
// export async function getInitialProps( {res} ) {
  try {
    // console.log("process.env.hostname 2",process.env.hostname)

    // const sitemap = await generateSitemapXml();
    (async () => {
      const sitemap = await generateSitemapXml();
      // console.log(sitemap);
        
      const gzippedSitemap = createGzip();
      gzippedSitemap.write(sitemap);
      gzippedSitemap.end();
    })();

    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Content-Encoding', 'gzip');
    res.setHeader('Content-Disposition', 'inline');

    gzippedSitemap.pipe(res);

    return { props: {} };
  } catch (error) {
    console.error('Error in getServerSideProps:', error);

    console.error(error);
    // res.statusCode = 500;
    // res.end();
    return { props: {} };
  }
}

