const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('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')

async function subscribeEmail(req, res) {
  try {
    await sgMail.send({
      to: 'snowwhite91924@gmail.com',
      from: 'contact@tribeone.io',
      subject: 'subscribe',
      html: 'I would like to subscribe to this platform'
    })
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default subscribeEmail;
