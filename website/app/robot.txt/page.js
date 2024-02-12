  //robot.txt.js
export default function RobotsTxt() {
  const robotsTxtContent = `User-agent: *
  Disallow: /admin
  Disallow: /private
  Disallow: /auth/signup
  Disallow: /auth/login
  Disallow: /auth/forgot-password
  `; // Modify this content based on your requirements

  return (
    // <main className="flex flex-col justify-between min-h-screen bg-white font-TerminaTest mt-10">
      <pre>{robotsTxtContent}</pre>
    // </main>
  );
}


  //for old next  version
  //api/robot.txt.js
  // export default function handler(req, res) {
//   res.setHeader('Content-Type', 'text/plain');
//   res.status(200).send(
//     `User-agent: *
//     Disallow: /admin
//     // Disallow: /login
//     // Disallow: /signup
//     // Disallow: /user/*
//     Sitemap: ${process.env.hostname}/sitemap.xml
//     `
//   );
// }

