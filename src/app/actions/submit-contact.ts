'use server'

import {
    CONFIRMATION_USER_EMAIL_TEMPLATE_PATH,
    NOTIFICATION_TEAM_EMAIL_TEMPLATE_PATH,
    sendNotificationEmail,
} from '@/lib/node-mailer'
import { ContactData, contactSchema } from '@/schema/contact-schema'

export async function submitContact(data: ContactData) {
    const parsedData = contactSchema.safeParse(data)

    if (!parsedData.success) {
        console.error(
            'Validation failed:',
            parsedData.error.flatten().fieldErrors
        )
        return { success: false, error: 'Dados inválidos' }
    }

    const { name, email, linkedin, github, findOut, message } = data

    const SUBJECT_TEAM = 'Nova mensagem recebida no Lab Yes!'
    const SUBJECT_USER = 'Oba! Sua mensagem chegou com sucesso. 😊'

    try {
        // Send notification email to the team
        await sendNotificationEmail({
            placeholders: {
                email,
                name,
                message,
                linkedin,
                github,
                findOut,
            },
            subject: SUBJECT_TEAM,
            templatePath: NOTIFICATION_TEAM_EMAIL_TEMPLATE_PATH,
            toEmail: process.env.APPLICATION_TO_EMAIL!,
            ccEmail: process.env.APPLICATION_CC_EMAIL,
        })

        // Send confirmation email to the user
        await sendNotificationEmail({
            placeholders: {
                name,
            },
            subject: SUBJECT_USER,
            templatePath: CONFIRMATION_USER_EMAIL_TEMPLATE_PATH,
            toEmail: email,
        })

        return { success: true }
    } catch (error) {
        console.error('Error sending email:', error)

        return {
            success: false,
            error: `Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.`,
        }
    }
}
