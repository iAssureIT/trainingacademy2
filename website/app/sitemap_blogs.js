const Sitemap=  async() => {

const hostName=process.env.hostname;
const baseUrl = process.env.baseURL;
  console.log("baseurl",baseUrl,process.env.NEXT_PUBLIC_HOSTNAME)
  console.log("process.env.hostname",process.env.hostname)
  const request = await fetch(baseUrl+'/api/website-data/get/blogs-url-sitemap');
  console.log("request getServerSideProps",request)
//   console.log("data getServerSideProps",data.data)

  const pages=[
    { url: `${baseUrl}/`, changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
    { url: `${baseUrl}/contact-us`, changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
    { url: `${baseUrl}/about-us`, changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
    { url: `${baseUrl}/blogs`, changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
    //services
    { url: `${baseUrl}/services/mobile-app-development`, changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
    { url: `${baseUrl}/services/web-app-development`, changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
    { url: `${baseUrl}/services/e-comm-online-store-development`, changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
    { url: `${baseUrl}/services/ui-ux-development`, changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
    { url: `${baseUrl}/services/application-modernization`, changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
    { url: `${baseUrl}/services/enhance-user-digital-experience`, changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
    { url: `${baseUrl}/services/manual-documents-to-digital-assets`, changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
    { url: `${baseUrl}/services/develop-digital-strategy-and-digital-applications`, changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
    { url: `${baseUrl}/services/customer-service-automation`, changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
    { url: `${baseUrl}/services/document-processing-and-report-automation`, changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
    { url: `${baseUrl}/services/data-migration-entry`, changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
    { url: `${baseUrl}/services/infrastructure-architech-selection`, changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
    { url: `${baseUrl}/services/it-operation-mgmt`, changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
    { url: `${baseUrl}/services/information-security`, changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
    { url: `${baseUrl}/services/network-security`, changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
    { url: `${baseUrl}/services/cloud-security`, changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
    { url: `${baseUrl}/services/manual-functional-testing`, changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
    { url: `${baseUrl}/services/automation-testing`, changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
    { url: `${baseUrl}/services/performance-testing`, changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
    { url: `${baseUrl}/services/security-testing`, changefreq: 'monthly', priority: 1.0, lastmod: new Date() },
  ];

  return pages;
 
};

export default Sitemap;


// const hostName=process.env.hostname;
// const baseURL = process.env.baseURL;
// function generateSiteMap(data) {
//   // console.log("data generateSiteMap",data)
//   return `<?xml version="1.0" encoding="UTF-8"?>
//       <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//         ${data
//           .map(( id ) => {
//             return `
//           <url>
//               <loc>${`${hostName}/${id}`}</loc>
//               <lastmod>${new Date().toISOString()}</lastmod>
//               <changefreq>daily</changefreq>
//               <priority>1.0</priority>
//           </url>
//         `;
//           })
//           .join('')}
//       </urlset>
//     `;
// }

// function SiteMap() {
// }

// export async function getServerSideProps({ res }) {
//   const request = await fetch(baseURL+'/api/website-data/get/blogs-url-sitemap');
// //   console.log("request getServerSideProps",request)
//   const data = await request.json();
// //   console.log("data getServerSideProps",data.data)
//   const sitemap = generateSiteMap(data.data);

//   res.setHeader('Content-Type', 'text/xml');
//   res.write(sitemap);
//   res.end();

//   return {
//     props: {},
//   };
// }

// export default SiteMap;