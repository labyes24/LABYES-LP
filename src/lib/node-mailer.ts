import 'server-only'

import { HtmlFileHandler } from '@/providers/html-handler'
import type { ContactData } from '@/schema/contact-schema'
import nodemailer from 'nodemailer'

type PlaceholdersParams = Partial<ContactData>

interface NotificationEmailParams {
    template: string
    placeholders: PlaceholdersParams
    toEmail: string
    subject: string
    ccEmail?: string
}

const transporter = nodemailer.createTransport({
    host: process.env.APPLICATION_SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
        user: process.env.APPLICATION_SMTP_USER,
        pass: process.env.APPLICATION_SMTP_PASSWORD,
    },
    pool: true,
})

async function sendNotificationEmail({
    template,
    placeholders,
    toEmail,
    subject,
    ccEmail,
}: NotificationEmailParams): Promise<{ success: boolean; error?: string }> {
    try {
        if (!template || !placeholders || !toEmail || !subject) {
            throw new Error('Parâmetros incompletos.')
        }

        const htmlToSend = HtmlFileHandler.updateHTMLContent({
            htmlString: template,
            placeholders,
        })

        const mailResult = await transporter.sendMail({
            from: `Team Lab Yes! <${process.env.APPLICATION_EMAIL_SENDER}>`,
            to: toEmail,
            cc: ccEmail,
            subject,
            html: htmlToSend,
        })

        if (!mailResult.accepted || mailResult.accepted.length === 0) {
            throw new Error('Sending email failed.')
        }

        return { success: true }
    } catch (error) {
        console.log(error)
        return { success: false, error: `${error}` }
    }
}

export { sendNotificationEmail }
export type { NotificationEmailParams, PlaceholdersParams }
