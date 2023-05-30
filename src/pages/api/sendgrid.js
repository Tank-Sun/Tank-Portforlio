import sendgrid from "@sendgrid/mail";

const sendgridApiKey = process.env.SENDGRID_API_KEY;

sendgrid.setApiKey(sendgridApiKey);

async function sendEmail(req, res) {

  try {
    await sendgrid.send({
      to: "thomastank0926@gmail.com", // Your email where you'll receive emails
      from: "tanksunportfolio@gmail.com", // your website email address here
      subject: `[Lead from website] : ${req.body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>The HTML5 Herald</title>
          <meta name="description" content="The HTML5 Herald">
          <meta name="author" content="SitePoint">
          <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        </head>

        <body>
          <div class="container" style="margin-left: 20px;margin-right: 20px;">
            <h3>You've got a new mail from ${req.body.name}, their email is: ✉️${req.body.email}, their phone number is ${req.body.phoneNumber} </h3>
            <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.message}</p>
            </div>
          </div>
        </body>
      </html>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message }); 
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;