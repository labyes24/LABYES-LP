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
        <div className="hidden items-center justify-center gap-4 md:flex">
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
                className="rounded-full bg-ly-orange-400 text-lg font-bold text-ly-white hover:bg-ly-orange-500"
                size={'lg'}
            >
                <Link className="" href="/contato" legacyBehavior passHref>
                    Fale conosco
                </Link>
            </Button>
        </div>
    )
}
