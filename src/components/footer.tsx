import { Mail } from 'lucide-react'
import Link from 'next/link'

import { IconGithub } from './svg/icon-github'
import { IconLinkedin } from './svg/icon-linkedin'
import { LogoLabYes } from './svg/logo-lab-yes'
import { Button } from './ui/button'

export function Footer() {
    return (
        <footer className="grid grid-cols-1 grid-rows-3 items-center gap-8 border-t border-t-foreground/10 py-16 text-foreground md:flex md:h-fit md:justify-between md:gap-6 md:px-36 md:py-8">
            <Link
                href={'/'}
                className="row-start-1 mx-auto w-fit select-none p-0 hover:cursor-pointer md:mx-0"
            >
                <LogoLabYes
                    className="h-6 md:h-9"
                    primaryFill="hsl(var(--logo-primary))"
                    secondaryFill="hsl(var(--logo-secondary))"
                />
            </Link>

            <div className="row-start-3 hidden leading-tight md:flex">
                Copyright © 2025
                <a
                    className="px-2 hover:text-ring"
                    href="https://lab-links.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Lab Yes!
                </a>
                | Todos os direitos reservados.
            </div>
            <div className="row-start-3 mx-auto flex md:hidden">
                Copyright © 2025
                <a
                    className="ps-2 hover:text-ring"
                    href="https://lab-links.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Lab Yes!
                </a>
            </div>

            <div className="row-start-2 flex items-center justify-center gap-2 md:justify-between">
                <Button
                    className="size-8 rounded-md bg-foreground transition-colors duration-200 hover:bg-primary"
                    variant={'link'}
                    asChild
                >
                    <Link
                        href={`mailto:${process.env.NEXT_PUBLIC_CLIENT_LINK_EMAIL}`}
                        target="_blank"
                    >
                        <Mail
                            className="size-8"
                            strokeWidth={2.5}
                            stroke="hsl(var(--card-foreground))"
                        />
                        <span className="sr-only">Link para email</span>
                    </Link>
                </Button>

                <Button
                    className="size-8 rounded-md bg-foreground transition-colors duration-200 hover:bg-primary"
                    variant={'link'}
                    asChild
                >
                    <Link
                        href={`${process.env.NEXT_PUBLIC_CLIENT_LINK_LINKEDIN}`}
                        target="_blank"
                    >
                        <IconLinkedin />
                        <span className="sr-only">Link do Linkedin</span>
                    </Link>
                </Button>

                <Button
                    className="size-8 rounded-md bg-foreground transition-colors duration-200 hover:bg-primary"
                    variant={'link'}
                    asChild
                >
                    <Link
                        href={`${process.env.NEXT_PUBLIC_CLIENT_LINK_GITHUB}`}
                        target="_blank"
                    >
                        <IconGithub />
                        <span className="sr-only">Link do GitHub</span>
                    </Link>
                </Button>
            </div>
        </footer>
    )
}
