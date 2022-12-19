import nodemailer from "nodemailer";



/**
 * Send Account activation code
 * @param {*} to 
 * @param {*} data 
 */
export const sendActivationCode = async (to, data) => {

// create transport
let transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT , 
    auth: {
      user: process.env.MAIL_ID,
      pass: process.env.MAIL_PASS,
    },
  });

  
  // send activation mail
  try {
    await transport.sendMail({
      from: `10 MS <${process.env.MAIL_ID}>`,   
      subject: "Account Activation",
      to: to,
      text: `
      Hi ${data.name}, 
      Your activation code is ${data.code}`
    
    });
  } catch (error) {
    console.log(error);
  }
};



