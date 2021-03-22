module.exports = ({ env }) => ({
    email: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.gmail.com'),
        port: env('SMTP_PORT', 587),
        auth: {
          user: env('SMTP_USER','madmailserver@gmail.com'),
          pass: env('SMTP_PASS','Mad@vert__2020')
        },
        secure: false
      },
      settings: {
        defaultFrom: 'madmailserver@gmail.com',
        defaultReplyTo: 'madmailserver@gmail.com',
      },
    },
  });