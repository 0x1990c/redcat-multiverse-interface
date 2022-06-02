const ConstantContact = require('node-constantcontact');

const cc = new ConstantContact({
  apiKey: process.env.CC_APIKEY,
  accessToken: process.env.CC_ACCESSTOKEN
});

async function subscribe(req, res) {
  try {
    const subscribeData = {
      lists: [
        {
          id: `${process.env.CC_RCM_LIST_ID}`
        }
      ],
      email_addresses: [
        {
          "email_address": req.body.email
        }
      ]
    }
    await cc.contacts.create(subscribeData, { action_by: 'ACTION_BY_OWNER' })
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default subscribe;
