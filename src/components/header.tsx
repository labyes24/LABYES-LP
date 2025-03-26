import Link from 'next/link'

import { MenuNavigationDesktop } from './menu-navigation-desktop'
import { MenuNavigationMobile } from './menu-navigation-mobile'
import { LogoLabYes } from './svg/logo-lab-yes'

export function Header() {
    return (
        <header className="sticky left-0 right-0 top-0 z-50 flex h-[72px] items-center justify-between border-b border-b-foreground/10 bg-background p-6 md:h-[110px] md:px-32">
            <Link
                href={'/'}
                className="inline-flex w-fit select-none p-0 hover:cursor-pointer focus:outline-none"
            >
                <LogoLabYes
                    className="mr-6 h-[37px] md:h-[45px]"
                    primaryFill="hsl(var(--logo-primary))"
                    secondaryFill="hsl(var(--logo-secondary))"
                    aria-label="logo do lab yes!"
                />
            </Link>

            <MenuNavigationMobile />
            <MenuNavigationDesktop />
        </header>
    )
}
