require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/report', (req, res) => {
    console.log("Received report request with:");
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "(hidden)" : "MISSING");
    console.log("Body:", req.body);

    const { summary, details, email } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: 'quartoteam2@gmail.com',
        to: process.env.EMAIL_USER,
        replyTo: 'boyan.georgiev@student.kdg.be',
        subject: 'New Bug Report',
        html: `
  <h2>New Bug Report Received</h2>
  <p><strong>Summary:</strong> ${summary}</p>
  <p><strong>Details:</strong><br>${details.replace(/\n/g, '<br>')}</p>
  <p><strong>Reporter Email:</strong> ${email || 'Not provided'}</p>
`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return res.status(500).send('Error sending email');
        }
        res.send('Report sent successfully');
    });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));