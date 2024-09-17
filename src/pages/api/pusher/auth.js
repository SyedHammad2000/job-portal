// pages/api/pusher/auth.js
import Pusher from "pusher";

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  useTLS: true,
});

export default async function handler(req, res) {
  const { socket_id, Channelname } = req.body;

  const authResponse = pusher.authenticate(socket_id, Channelname);
  res.send(authResponse);
}
