import { transporter } from '../configs/email'

interface Email {
  name: string
  email: string
  body: string
}

export const contactModel = async ({ name, email, body }: Email) => {
  try {
    return transporter.sendMail({
      from: process.env.USER,
      to: process.env.USER,
      replyTo: email,
      subject: `[CONTATO - thiagomachado.vercel.app] ${name} enviou uma mensagem`,
      text: body,
    })
  } catch (err) {
    console.log(err)
  }
}