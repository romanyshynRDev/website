import { NextResponse } from 'next/server';
import { createTransport, SendMailOptions } from 'nodemailer';

const transporter = createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
    },
});

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();
        console.log('Отримані дані:', { name, email, message });

        if (!name || !email || !message) {
            console.log('Відсутні обов\'язкові поля');
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const mailOptions: SendMailOptions = {
            from: process.env.NODEMAILER_EMAIL,
            to: process.env.NODEMAILER_EMAIL, 
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            html: `<div><h1>New Contact Form Submission</h1><p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p></div>`,
        };

        console.log('Mail options:', mailOptions);

        const info = await transporter.sendMail(mailOptions);
        console.log('Повідомлення надіслано: %s', info.messageId);
        return NextResponse.json({ message: 'Повідомлення надіслано успішно' }, { status: 200 });
    } catch (error: any) {
        console.error('Помилка надсилання електронної пошти:', error);
        return NextResponse.json({ error: error.message || 'Не вдалося надіслати електронний лист' }, { status: 500 });
    }
}