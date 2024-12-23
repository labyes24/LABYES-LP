import { Mail } from 'lucide-react'
import Link from 'next/link'
import { IconLinkedin } from './svg/icon-linkedin'
import { IconYoutube } from './svg/icon-youtube'
import { LogoLabYesLight } from './svg/logo-lab-yes-light'
import { Button } from './ui/button'

export function Footer() {
    return (
        <footer className="grid grid-cols-1 grid-rows-3 items-center gap-8 border-muted bg-ly-dark-azure-800 py-16 md:flex md:h-fit md:justify-between md:gap-6 md:px-36 md:py-8">
            <Link
                href={'/'}
                className="row-start-1 mx-auto w-fit select-none p-0 hover:cursor-pointer md:mx-0"
            >
                <LogoLabYesLight />
            </Link>

            <div className="row-start-3 hidden leading-tight text-ly-white md:flex">
                Copyright © 2024 Lab Yes! | Todos os direitos reservados.
            </div>
            <div className="row-start-3 mx-auto flex text-ly-white md:hidden">
                Copyright © 2024 Lab Yes!
            </div>
            <div className="row-start-2 flex items-center justify-center gap-2 md:justify-between">
                <Button
                    className="h-8 w-8 rounded-md bg-ly-white transition-colors duration-200 hover:bg-ly-orange-400"
                    variant={'link'}
                >
                    <Link
                        href={`mailto:${process.env.NEXT_PUBLIC_CLIENT_LINK_EMAIL}`}
                        target="_blank"
                    >
                        <Mail
                            className="h-8 w-8 text-ly-dark-azure-700"
                            strokeWidth={2.5}
                        />

                        <span className="sr-only">Link para email</span>
                    </Link>
                </Button>

                <Button
                    className="h-8 w-8 rounded-md bg-ly-white transition-colors duration-200 hover:bg-ly-orange-400"
                    variant={'link'}
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
                    className="h-8 w-8 rounded-md bg-ly-white transition-colors duration-200 hover:bg-ly-orange-400"
                    variant={'link'}
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
