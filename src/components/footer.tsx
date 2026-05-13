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
        <footer className="grid grid-cols-1 grid-rows-3 items-center gap-8 border-t border-t-foreground/10 py-16 text-foreground md:flex md:h-fit md:justify-between md:gap-6 md:px-36 md:py-8">
            <Link
                href={'/'}
                className="row-start-1 mx-auto w-fit select-none rounded-md p-0 outline-2 outline-offset-2 hover:cursor-pointer focus-visible:outline focus-visible:outline-ring md:mx-0"
                aria-label="Logo Lab Yes!, ir para página inicial"
            >
                <LogoLabYes
                    className="h-6 md:h-9"
                    primaryFill="hsl(var(--logo-primary))"
                    secondaryFill="hsl(var(--logo-secondary))"
                />
            </Link>

            <div className="row-start-3 hidden leading-tight md:flex">
                Copyright &copy; {COPYRIGHT_YEAR}
                <a
                    className="rounded-sm px-2 outline-2 outline-offset-2 transition-colors duration-200 hover:text-ring focus-visible:text-ring focus-visible:outline focus-visible:outline-ring"
                    href="https://www.lab-yes.com"
                    aria-label="lab yes!, ir para página inicial"
                >
                    Lab Yes!
                </a>
                | Todos os direitos reservados.
            </div>
            <div className="row-start-3 mx-auto flex md:hidden">
                Copyright &copy; {COPYRIGHT_YEAR}
                <a
                    className="rounded-sm px-2 outline-2 outline-offset-2 transition-colors duration-200 hover:text-ring focus-visible:text-ring focus-visible:outline focus-visible:outline-ring"
                    href="https://www.lab-yes.com"
                    aria-label="lab yes!, ir para página inicial"
                >
                    Lab Yes!
                </a>
            </div>

            <div className="row-start-2 flex items-center justify-center gap-2 md:justify-between">
                <Button
                    className="size-8 rounded-md bg-foreground outline-2 outline-offset-2 transition-colors duration-300 hover:bg-primary focus-visible:bg-primary focus-visible:outline focus-visible:outline-primary"
                    variant={'link'}
                    asChild
                >
                    <a href={`mailto:${EMAIL_URL}`} target="_blank">
                        <Mail
                            className="size-8"
                            strokeWidth={2.5}
                            stroke="hsl(var(--card-foreground))"
                            role="presentation"
                        />
                    </a>
                </Button>

                <Button
                    className="size-8 rounded-md bg-foreground outline-2 outline-offset-2 transition-colors duration-300 hover:bg-primary focus-visible:bg-primary focus-visible:outline focus-visible:outline-primary"
                    variant={'link'}
                    asChild
                >
                    <a href={`${LINKEDIN_URL}`} target="_blank">
                        <IconLinkedin />
                    </a>
                </Button>
            </div>
        </footer>
    )
}
