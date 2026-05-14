import { Mail } from 'lucide-react'
import Link from 'next/link'

import { IconLinkedin } from './svg/icon-linkedin'
import { LogoLabYes } from './svg/logo-lab-yes'
import { Button } from './ui/button'

const LINKEDIN_URL = process.env.NEXT_PUBLIC_CLIENT_LINK_LINKEDIN
const EMAIL_URL = process.env.NEXT_PUBLIC_CLIENT_LINK_EMAIL
const COPYRIGHT_YEAR = new Date().getFullYear()

export function Footer() {
    return (
        <footer className="grid grid-cols-1 grid-rows-3 items-center gap-8 border-t border-t-foreground/10 py-16 text-foreground xl:flex xl:h-fit xl:justify-between xl:gap-6 xl:px-36 xl:py-8">
            <Link
                href={'/'}
                className="row-start-1 mx-auto w-fit select-none rounded-md p-0 outline-2 outline-offset-2 hover:cursor-pointer focus-visible:outline focus-visible:outline-ring xl:mx-0"
                aria-label="Logo Lab Yes, ir para página inicial"
            >
                <LogoLabYes
                    className="h-6 xl:h-9"
                    primaryFill="hsl(var(--logo-primary))"
                    secondaryFill="hsl(var(--logo-secondary))"
                />
            </Link>

            <div className="row-start-3 hidden leading-tight xl:flex">
                Copyright
                <span aria-hidden="true" className="px-2">
                    &copy;
                </span>
                {COPYRIGHT_YEAR}
                <Link
                    className="rounded-sm px-2 outline-2 outline-offset-2 transition-colors duration-200 hover:text-ring focus-visible:text-ring focus-visible:outline focus-visible:outline-ring"
                    href="/"
                    aria-label="lab yes!, ir para página inicial"
                >
                    Lab Yes!
                </Link>
                | Todos os direitos reservados.
            </div>

            <div className="row-start-2 flex items-center justify-center gap-2 xl:justify-between">
                <Button
                    className="size-8 rounded-md bg-foreground outline-2 outline-offset-2 transition-colors duration-300 hover:bg-primary focus-visible:bg-primary focus-visible:outline focus-visible:outline-primary"
                    variant="link"
                    asChild
                >
                    <a
                        href={`mailto:${EMAIL_URL}`}
                        target="_blank"
                        aria-label="enviar email para contato, nova janela"
                    >
                        <Mail
                            className="size-8"
                            strokeWidth={2.5}
                            stroke="hsl(var(--card-foreground))"
                            aria-hidden="true"
                        />
                    </a>
                </Button>

                <Button
                    className="size-8 rounded-md bg-foreground outline-2 outline-offset-2 transition-colors duration-300 hover:bg-primary focus-visible:bg-primary focus-visible:outline focus-visible:outline-primary"
                    variant="link"
                    asChild
                >
                    <a
                        href={`${LINKEDIN_URL}`}
                        target="_blank"
                        aria-label="ir para Linkedin Lab Yes, nova janela"
                    >
                        <IconLinkedin aria-hidden="true" />
                    </a>
                </Button>
            </div>

            <div className="row-start-3 mx-auto flex xl:hidden">
                Copyright
                <span aria-hidden="true" className="px-2">
                    &copy;
                </span>
                {COPYRIGHT_YEAR}
                <Link
                    className="rounded-sm px-2 outline-2 outline-offset-2 transition-colors duration-200 hover:text-ring focus-visible:text-ring focus-visible:outline focus-visible:outline-ring"
                    href="/"
                    aria-label="lab yes, ir para página inicial"
                >
                    Lab Yes!
                </Link>
            </div>
        </footer>
    )
}
