import Image from 'next/image'
import logoLabYes from '../../public/logo.svg'
import { MenuNavigationDesktop } from './menu-navigation-desktop'
import { MenuNavigationMobile } from './menu-navigation-mobile'
import { Button } from './ui/button'

export function Header() {
    return (
        <header className="sticky left-0 right-0 top-0 mb-6 flex h-fit items-center justify-between gap-6 border-b border-muted bg-ly-white p-6 md:px-36 md:py-8">
            <Button
                asChild
                variant={'link'}
                className="h-6 w-fit select-none p-0 hover:cursor-pointer hover:bg-transparent md:h-8"
            >
                <Image
                    src={logoLabYes}
                    priority={true}
                    draggable={false}
                    alt="Logo 'Lab Yes!'"
                    className="rounded-lg object-cover"
                />
            </Button>
            <MenuNavigationMobile />
            <MenuNavigationDesktop />
        </header>
    )
}
