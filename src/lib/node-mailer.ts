import 'server-only'

import { HtmlFileHandler } from '@/providers/html-handler'
import path from 'node:path'
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

const NOTIFICATION_TEAM_EMAIL_TEMPLATE_PATH = path.resolve(
    process.cwd(),
    'src',
    'components',
    'templates',
    'notification-team-email.html'
)
const CONFIRMATION_USER_EMAIL_TEMPLATE_PATH = path.resolve(
    process.cwd(),
    'src',
    'components',
    'templates',
    'confirmation-user-email.html'
)

async function sendNotificationEmail({
    templatePath,
    placeholders,
    toEmail,
    subject,
}: NotificationEmailParams): Promise<{ success: boolean; error?: string }> {
    try {
        if (!templatePath || !placeholders || !toEmail || !subject) {
            throw new Error('Parâmetros incompletos.')
        }

        const htmlTemplate = await HtmlFileHandler.readHTMLFile(templatePath)
        const htmlToSend = HtmlFileHandler.updateHTMLContent({
            htmlString: htmlTemplate,
            placeholders,
        })

        await transporter.sendMail({
            from: `Team Lab Yes! <${process.env.APPLICATION_EMAIL}>`,
            to: toEmail,
            subject,
            text: subject,
            html: htmlToSend,
        })

        return { success: true }
    } catch (error) {
        console.log(error)
        return { success: false, error: `Erro ao enviar e-mail: ${error}` }
    }
}

export {
    CONFIRMATION_USER_EMAIL_TEMPLATE_PATH,
    NOTIFICATION_TEAM_EMAIL_TEMPLATE_PATH,
    sendNotificationEmail,
}
export type { NotificationEmailParams, PlaceholdersParams }
