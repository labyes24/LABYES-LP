// environment.d.ts

declare namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_CLIENT_LINK_EMAIL: string
        NEXT_PUBLIC_CLIENT_LINK_LINKEDIN: string
        NEXT_PUBLIC_CLIENT_LINK_YOUTUBE: string

        SEND_EMAIL_PROTOCOL: string
        APPLICATION_EMAIL: string
        APPLICATION_EMAIL_PASSWORD: string

        NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: string | undefined
    }
}
