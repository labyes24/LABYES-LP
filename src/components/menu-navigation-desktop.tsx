import Link from 'next/link'
import { MenuNavigationLink } from './menu-navigation-link'
import { Button } from './ui/button'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from './ui/navigation-menu'

export function MenuNavigationDesktop() {
    return (
        <div className="hidden items-center justify-center gap-4 lg:flex">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <MenuNavigationLink href="/" title="Home" />
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <MenuNavigationLink
                            href="/quemsomos"
                            title="Quem somos"
                        />
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <MenuNavigationLink href="/conexoes" title="Conexões" />
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <MenuNavigationLink href="/projetos" title="Projetos" />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <Button
                asChild
                className="rounded-full border-2 border-transparent text-lg font-bold focus:border-primary focus:bg-primary/50"
                size={'lg'}
            >
                <Link href="/contato">Fale conosco</Link>
            </Button>
        </div>
    )
}
