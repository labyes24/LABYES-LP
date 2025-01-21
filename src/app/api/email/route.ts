import {
    NOTIFICATION_TEMPLATE_PATH,
    sendNotificationEmail,
} from '@/lib/node-mailer'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    const formData = await request.formData()

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string
    const subject = 'teste email'

    await sendNotificationEmail({
        placeholders: {
            email,
            name,
            message,
            sender_name: name,
            dev_enterprise: name,
        },
        subject,
        templatePath: NOTIFICATION_TEMPLATE_PATH,
        toEmail: process.env.APPLICATION_EMAIL,
    })
    return NextResponse.json({ resposta: 'Deu bom meu chapa!' })
}
