import Link from 'next/link'
import { MenuNavigationDesktop } from './menu-navigation-desktop'
import { MenuNavigationMobile } from './menu-navigation-mobile'
import { LogoLabYes } from './svg/logo-lab-yes'

export function Header() {
    return (
        <header className="sticky left-0 right-0 top-0 z-50 flex h-fit items-center justify-between gap-6 border-b border-muted bg-ly-white p-6 md:px-36 md:py-8">
            <Link
                href={'/'}
                className="inline-flex w-fit select-none p-0 hover:cursor-pointer"
            >
                <LogoLabYes />
            </Link>

            <MenuNavigationMobile />
            <MenuNavigationDesktop />
        </header>
    )
}
