import fetch from 'isomorphic-fetch';

export default async function handler(req, res) {
  try {
    const response = await fetch('https://iaspireit.s3.ap-south-1.amazonaws.com/iAspireIT-Executive+-Learning-Brochure-2.pdf');
    const fileBlob = await response.blob();
    res.setHeader('Content-Disposition', 'attachment; filename="your-pdf-file-name.pdf"');
    res.setHeader('Content-Type', 'application/pdf');
    res.send(fileBlob);
  } catch (error) {
    console.error('Error downloading PDF:', error);
    res.status(500).json({ error: 'Error downloading PDF' });
  }
}