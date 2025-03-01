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

            <Button className="rounded-full text-lg font-bold" size={'lg'}>
                <Link className="" href="/contato" legacyBehavior passHref>
                    Fale conosco
                </Link>
            </Button>
        </div>
    )
}
