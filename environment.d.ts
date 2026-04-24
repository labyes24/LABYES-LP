// environment.d.ts

declare namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_CLIENT_LINK_EMAIL: string | undefined
        NEXT_PUBLIC_CLIENT_LINK_LINKEDIN: string | undefined
        NEXT_PUBLIC_CLIENT_LINK_GITHUB: string | undefined
        NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: string | undefined

        APPLICATION_SMTP_HOST: string | undefined
        APPLICATION_SMTP_USER: string | undefined
        APPLICATION_SMTP_PASSWORD: string | undefined
        APPLICATION_EMAIL_SENDER: string | undefined
        APPLICATION_TO_EMAIL: string | undefined
        APPLICATION_CC_EMAIL: string | undefined
    }
}
