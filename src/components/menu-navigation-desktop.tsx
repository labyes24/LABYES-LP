import Link from 'next/link'
import { MenuNavigationLink } from './menu-navigation-link'
import { Button } from './ui/button'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from './ui/navigation-menu'

import { navigation } from '@/lib/navigation'

export function MenuNavigationDesktop() {
    const { links, CTA } = navigation

    return (
        <div className="hidden items-center justify-center gap-4 lg:flex">
            <NavigationMenu>
                <NavigationMenuList>
                    {links.map((link) => (
                        <NavigationMenuItem key={link.href}>
                            <MenuNavigationLink
                                href={link.href}
                                title={link.title}
                            />
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>

            <Button
                asChild
                className="rounded-full border-2 border-transparent text-lg font-bold text-background transition-colors duration-300 focus:border-primary focus:bg-primary/50 focus:text-primary-foreground"
                size={'lg'}
            >
                <Link href={CTA.href}>{CTA.title}</Link>
            </Button>
        </div>
    )
}
