import 'server-only'

import { HtmlFileHandler } from '@/providers/html-handler'
import nodemailer from 'nodemailer'

interface PlaceholdersParams {
    dev_enterprise: string
    sender_name: string
    name: string
    email: string
    message: string
}

interface NotificationEmailParams {
    templatePath: string
    placeholders: PlaceholdersParams
    toEmail: string
    subject: string
}

const transporter = nodemailer.createTransport({
    host: process.env.SEND_EMAIL_PROTOCOL,
    port: 587,
    secure: false,
    auth: {
        user: process.env.APPLICATION_EMAIL,
        pass: process.env.APPLICATION_EMAIL_PASSWORD,
    },
})

const NOTIFICATION_TEMPLATE_PATH =
    'C://Users//Ylderlan//Documents//LabYes//LABYES-LP//src//components//templates//notification.html'
//  path.join(
//     __dirname,
//     '..',
//     '..',
//     'components',
//     'templates',
//     'notification.html'
// )

async function sendNotificationEmail({
    templatePath,
    placeholders,
    toEmail,
    subject,
}: NotificationEmailParams): Promise<void> {
    try {
        if (!templatePath || !placeholders || !toEmail || !subject) {
            console.log('Parâmetros incompletos.')
            throw new Error('Parâmetros incompletos.')
        }

        const htmlTemplate = await HtmlFileHandler.readHTMLFile(templatePath)

        const htmlToSend = HtmlFileHandler.updateHTMLContent({
            htmlString: htmlTemplate,
            placeholders,
        })

        await transporter.sendMail({
            from: `Lab Yes! <${process.env.APPLICATION_EMAIL}>`,
            to: toEmail,
            subject,
            text: subject,
            html: htmlToSend,
        })
    } catch (error) {
        console.log(error)
        throw new Error(`Erro ao enviar e-mail: ${error}`)
    }
}

export { NOTIFICATION_TEMPLATE_PATH, sendNotificationEmail }
export type { NotificationEmailParams, PlaceholdersParams }
