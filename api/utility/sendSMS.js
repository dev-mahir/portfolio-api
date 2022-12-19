import axios from "axios";

export const sendOTPCode = async (to,sms) => {
  const res = await axios
    .get(
      `https://bulksmsbd.net/api/smsapi?api_key=${process.env.SMS_API_KEY}&type=${process.env.SMS_TYPE}&number=${to}&senderid=${process.env.SMS_SENDER_ID}&message=${sms}`
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

