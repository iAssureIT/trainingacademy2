const Sitemap = () => {

  const baseUrl = process.env.hostname;
  const pages=[
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
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const url = `${baseUrl}${page.url}`;
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${(page.lastmod).toISOString()}</lastmod>
              <changefreq>${page.changefreq}</changefreq>
              <priority>${page.priority}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>`;


  return sitemap;
};

export default Sitemap;
