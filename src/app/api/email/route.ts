import {
    CONFIRMATION_USER_EMAIL_TEMPLATE_PATH,
    NOTIFICATION_TEAM_EMAIL_TEMPLATE_PATH,
    sendNotificationEmail,
} from '@/lib/node-mailer'
import { generateRandomToken } from '@/lib/utils'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    const formData = await request.formData()

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    const randomToken = generateRandomToken()

    const subjectTeam = 'Nova mensagem recebida no Lab Yes! - ' + randomToken
    const subjectUser = 'Recebemos sua mensagem no Lab Yes! - ' + randomToken

    await sendNotificationEmail({
        placeholders: {
            email,
            name,
            message,
            sender_name: name,
            dev_enterprise: name,
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
            dev_enterprise: name,
        },
        subject: subjectUser,
        templatePath: CONFIRMATION_USER_EMAIL_TEMPLATE_PATH,
        toEmail: email,
    })
    return NextResponse.json({})
}
