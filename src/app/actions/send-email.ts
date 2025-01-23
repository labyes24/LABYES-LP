'use server'

import { FormStateType } from '@/components/contact-form'
import {
    CONFIRMATION_USER_EMAIL_TEMPLATE_PATH,
    NOTIFICATION_TEAM_EMAIL_TEMPLATE_PATH,
    sendNotificationEmail,
} from '@/lib/node-mailer'
import { generateRandomToken } from '@/lib/utils'

const userTypeMap = {
    enterprise: 'Empresa',
    dev: 'Dev Junior',
}

export async function sendEmail(
    prevState: FormStateType,
    formData: FormData,
    userTypeKey: 'enterprise' | 'dev'
) {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    const userType = userTypeMap[userTypeKey] || ''

    const randomToken = generateRandomToken()

    const subjectTeam = 'Nova mensagem recebida no Lab Yes! - ' + randomToken
    const subjectUser = 'Recebemos sua mensagem no Lab Yes! - ' + randomToken

    try {
        await sendNotificationEmail({
            placeholders: {
                email,
                name,
                message,
                sender_name: name,
                dev_enterprise: userType,
            },
            subject: subjectTeam,
            templatePath: NOTIFICATION_TEAM_EMAIL_TEMPLATE_PATH,
            toEmail: process.env.APPLICATION_EMAIL,
        })

        await sendNotificationEmail({
            placeholders: {
                email,
                name,
                message,
                sender_name: name,
                dev_enterprise: userType,
            },
            subject: subjectUser,
            templatePath: CONFIRMATION_USER_EMAIL_TEMPLATE_PATH,
            toEmail: email,
        })

        return { ...prevState, success: true }
    } catch (error) {
        return { ...prevState, success: false, error: 'Erro ao enviar email.' }
    }
}
