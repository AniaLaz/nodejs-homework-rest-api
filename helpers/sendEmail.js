const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
    const email = { ...data, from: "lazarenko.ania.sg@gmail.com" }
    const testSendEmail = await sgMail.send(email);
    console.log("testSendEmail", testSendEmail);
    return true

//     const testSendEmail = sgMail
//       .send(email)
//       .then(() => console.log("++++++++++++++"))
//       .catch((err) => console.log("----------------", err.message));
// return testSendEmail;
}

module.exports = sendEmail;