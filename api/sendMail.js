import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const oauth2Client = new google.auth.OAuth2(
  process.env.EMAIL_CLIENT_ID, // OAuth2 Client ID
  process.env.EMAIL_CLIENT_SECRET, // OAuth2 Client Secret
  process.env.EMAIL_REDIRECT_URI // OAuth2 Redirect URI (optional)
);

// Set the credentials using the refresh token
oauth2Client.setCredentials({
  refresh_token: process.env.EMAIL_REFRESH_TOKEN, // OAuth2 Refresh Token
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, phone, message } = req.body;

      // Get a new access token
      const accessToken = await oauth2Client.getAccessToken();

      // Nodemailer Transporter Setup using OAuth2
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.EMAIL_USER, // Sender email
          clientId: process.env.EMAIL_CLIENT_ID, // OAuth2 Client ID
          clientSecret: process.env.EMAIL_CLIENT_SECRET, // OAuth2 Client Secret
          refreshToken: process.env.EMAIL_REFRESH_TOKEN, // OAuth2 Refresh Token
          accessToken: accessToken.token, // OAuth2 Access Token
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

      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending message', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
