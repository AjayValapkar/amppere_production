import SibApiV3Sdk from '@sendinblue/client';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Initialize Brevo (Sendinblue) API client
    const client = new SibApiV3Sdk.TransactionalEmailsApi();
    client.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, process.env.SENDINBLUE_API_KEY);

    // Set up email details
    const sendSmtpEmail = {
      to: [{ email: 'valapkarajay2002@gmail.com' }], // Replace with your receiving email address
      sender: { name: 'Amppere Cable', email: 'valapkarajay96@gmail.com' }, // Use a verified email in Brevo
      subject: 'New Contact Form Submission',
      htmlContent: `
        <html>
          <body>
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
          </body>
        </html>
      `,
    };

    try {
      // Send the email
      await client.sendTransacEmail(sendSmtpEmail);
      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending message', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
