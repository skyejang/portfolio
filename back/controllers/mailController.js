// controllers/mailController.js
const transporter = require("../config/mailer");

const sendMail = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: email,
      to: "skyee.jang@gmail.com",
      subject: `name: ${name}`,
      text: message,
    });
    res.status(200).json({ success: true });
    console.log("메일 전송 요청 수신:", { name, email, message });
  } catch (error) {
    console.error("메일 전송 실패:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { sendMail };
