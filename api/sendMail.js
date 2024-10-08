import SibApiV3Sdk from '@sendinblue/client';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;

    // Initialize Brevo (Sendinblue) API client
    const client = new SibApiV3Sdk.TransactionalEmailsApi();
    client.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, process.env.SENDINBLUE_API_KEY);

    // Set up email details
    const sendSmtpEmail = {
      to: [{ email: 'valapkarajay2002@gmail.com' }], // Receiving email address
      sender: { name: `${name}`, email: 'valapkarajay96@gmail.com' }, // Verified Brevo sender email
      subject: 'New Enquiry from Website',
      htmlContent: `
        <html>
          <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
            <table style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <!-- Header -->
              <tr>
                <td style="text-align: center; padding-bottom: 20px;">
                  <h2 style="color: #333333; font-size: 24px; font-weight: bold; margin: 0;">
                    New Enquiry from Website
                  </h2>
                </td>
              </tr>
    
              <!-- Details Section -->
              <tr>
                <td style="padding: 20px;">
                  <p style="font-size: 16px; color: #555555; margin: 0 0 8px;"><strong>Name:</strong> ${name}</p>
                  <p style="font-size: 16px; color: #555555; margin: 0 0 8px;"><strong>Email:</strong> ${email}</p>
                  <p style="font-size: 16px; color: #555555; margin: 0 0 8px;"><strong>Phone:</strong> ${phone}</p>
                  <p style="font-size: 16px; color: #555555; margin: 0 0 8px;"><strong>Message:</strong></p>
                  <p style="font-size: 16px; color: #555555; margin: 0; padding-left: 15px;">${message}</p>
                </td>
              </tr>
    
              <!-- Footer -->
              <tr>
                <td style="padding-top: 20px; text-align: center;">
                  <p style="font-size: 12px; color: #888888;">
                    Thank you for reaching out. We will get back to you shortly.
                  </p>
                </td>
              </tr>
            </table>
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
