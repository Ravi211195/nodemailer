const nodemailer = require('nodemailer');

module.exports = async function sendmail(subject,body) {

    // create reusable transporter object using the default SMTP transport

    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "raviray211195@gmail.com",
        pass: "rvvbtvemfqxoaavb"
      },
      tls : { 
            rejectUnauthorized : false  // Important for sendimg mail from localhost
      }
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "info@sendermail.com",
      to: "raviray211195@gmail.com",
      subject: subject,
      text: "",
      html: body // html body
    });
  
    console.log(info);
    console.log("Message sent: %s", info.messageId);
  }
