'use server'

import { sendNotificationEmail } from '@/lib/node-mailer'
import { ContactData, contactSchema } from '@/schema/contact-schema'
import { TEAM_TEMPLATE, USER_TEMPLATE } from '@/templates'

export async function submitContact(
    data: ContactData
): Promise<{ success: true } | { success: false; error: string }> {
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
        const teamEmailResult = await sendNotificationEmail({
            placeholders: {
                email,
                name,
                message,
                linkedin,
                github,
                findOut,
            },
            subject: SUBJECT_TEAM,
            template: TEAM_TEMPLATE,
            toEmail: process.env.APPLICATION_TO_EMAIL!,
            ccEmail: process.env.APPLICATION_CC_EMAIL,
        })
        if (!teamEmailResult.success) {
            console.error('Error sending team email:', teamEmailResult.error)
            return {
                success: false,
                error: 'Failed to send team notification email.',
            }
        }

        // Send confirmation email to the user
        const userEmailResult = await sendNotificationEmail({
            placeholders: {
                name,
            },
            subject: SUBJECT_USER,
            template: USER_TEMPLATE,
            toEmail: email,
        })

        if (!userEmailResult.success) {
            console.error('Error sending user email:', userEmailResult.error)
            return {
                success: false,
                error: 'Failed to send user confirmation email.',
            }
        }

        return { success: true }
    } catch (error) {
        console.error('Error sending email:', error)

        return {
            success: false,
            error: 'Failed to send notification emails.',
        }
    }
}
