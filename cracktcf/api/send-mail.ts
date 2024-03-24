// pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com', // Your SMTP host
      port: 587, // Your SMTP port
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'your@email.com', // Your email address
        pass: 'yourpassword', // Your email password
      },
    });

    // Send mail with defined transport object
    try {
      const info = await transporter.sendMail({
        from: '"Your Name" <your@email.com>', // Sender address
        to: req.body.email, // Receiver email from the form data
        subject: 'Contact Us Message', // Subject line
        text: req.body.message, // Plain text body
        html: `<b>${req.body.message}</b>`, // HTML body
      });

      console.log('Message sent: %s', info.messageId);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
