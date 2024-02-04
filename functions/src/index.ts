import { onRequest } from 'firebase-functions/v2/https';
import axios from 'axios';

export const sayHi = onRequest((request, response) => {
  const apiKey = 'cb0336564600b857220371aff8b796cea6534f90';
  const region = 'EU';
  const appId = request.body.appId;
  const botUid = request.body.bot;
  const botUrl = ` https://${appId}.api-${region}.cometchat.io/v3/bots/${botUid}/messages`;
  const sender = request.body.data.sender;

  const requestBody = {
    category: 'message',
    type: 'text',
    data: {
      text: 'Hi',
    },
    receiver: sender,
    receiverType: 'user',
  };

  axios
    .post(botUrl, requestBody, {
      headers: {
        apikey: apiKey,
      },
    })
    .then(() => {
      response.status(200).send({ ok: true });
    })
    .catch(() => {
      response.status(500).send({ ok: false });
    });
});
