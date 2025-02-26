import { Mail } from 'lucide-react'
import Link from 'next/link'

import { IconLinkedin } from './svg/icon-linkedin'
import { IconYoutube } from './svg/icon-youtube'
import { LogoLabYesLight } from './svg/logo-lab-yes-light'
import { Button } from './ui/button'

export function Footer() {
    return (
        <footer className="grid grid-cols-1 grid-rows-3 items-center gap-8 border-muted py-16 text-foreground md:flex md:h-fit md:justify-between md:gap-6 md:px-36 md:py-8">
            <Link
                href={'/'}
                className="row-start-1 mx-auto w-fit select-none p-0 hover:cursor-pointer md:mx-0"
            >
                <LogoLabYesLight />
            </Link>

            <div className="row-start-3 hidden leading-tight md:flex">
                Copyright © 2025 Lab Yes! | Todos os direitos reservados.
            </div>
            <div className="row-start-3 mx-auto flex md:hidden">
                Copyright © 2025 Lab Yes!
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
                        href={process.env.NEXT_PUBLIC_CLIENT_LINK_LINKEDIN}
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
                    <Link href={process.env.NEXT_PUBLIC_CLIENT_LINK_YOUTUBE}>
                        <IconYoutube />
                        <span className="sr-only">Link do YouTube</span>
                    </Link>
                </Button>
            </div>
        </footer>
    )
}
