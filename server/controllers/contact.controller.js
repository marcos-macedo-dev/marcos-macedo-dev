const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

exports.sendEmail = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        console.log('❌ Dados incompletos recebidos na rota de contato.');
        return res.status(400).json({ error: 'Preencha todos os campos' });
    }

    console.log('📥 Novo contato recebido:');
    console.log('----------------------------');
    console.log(`👤 Nome: ${name}`);
    console.log(`📧 Email: ${email}`);
    console.log(`💌 Mensagem: ${message}`);
    console.log('----------------------------');

    try {
        // Carrega template HTML do arquivo
        const templatePath = path.join(__dirname, '../email/emailTemplate.html');
        let htmlTemplate = fs.readFileSync(templatePath, 'utf-8');

        // Substitui os placeholders pelos valores reais (escape simples)
        htmlTemplate = htmlTemplate
            .replace('{{name}}', name.replace(/</g, "&lt;").replace(/>/g, "&gt;"))
            .replace('{{email}}', email.replace(/</g, "&lt;").replace(/>/g, "&gt;"))
            .replace('{{message}}', message.replace(/</g, "&lt;").replace(/>/g, "&gt;"));

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_RECEIVER,
            subject: 'Novo contato pelo site 🚀',
            html: htmlTemplate,
        });

        console.log('✅ Email enviado com sucesso!');

        return res.status(200).json({ message: 'Email enviado com sucesso' });
    } catch (error) {
        console.error('❌ Erro ao enviar email:', error);
        return res.status(500).json({ error: 'Erro ao enviar email' });
    }
};
