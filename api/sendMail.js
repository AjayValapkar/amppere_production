const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, phone, message } = req.body;

      // Nodemailer Transporter Setup using environment variables
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.GMAIL_USER, // Email of the sender
          clientId: process.env.GMAIL_CLIENT_ID, // OAuth2 Client ID
          clientSecret: process.env.GMAIL_CLIENT_SECRET, // OAuth2 Client Secret
          refreshToken: process.env.GMAIL_REFRESH_TOKEN, // OAuth2 Refresh Token
        },
      });

      const mailOptions = {
        from: `${name} <${email}>`,
        to: 'valapkarajay96@gmail.com', // Change to your email
        subject: 'New Enquiry from Your Website',
        html: `
          <html>
            <body>
              <h2>New Enquiry</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Message:</strong> ${message}</p>
              <hr />
              <p>Thank you for reaching out!</p>
            </body>
          </html>
        `,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending message', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not allowed' });
  }
}
