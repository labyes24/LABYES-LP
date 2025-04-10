import { Menu } from 'lucide-react'
import { MenuNavigationLink } from './menu-navigation-link'
import { LogoLabYes } from './svg/logo-lab-yes'
import { Button } from './ui/button'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from './ui/sheet'

export function MenuNavigationMobile() {
    return (
        <div className="flex lg:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button asChild className="p-0" variant={'ghost'}>
                        <Menu
                            className="h-8 w-8 flex-shrink-0 text-foreground"
                            strokeWidth={2}
                        />
                    </Button>
                </SheetTrigger>
                <SheetContent className="flex flex-col gap-6">
                    <SheetHeader>
                        <SheetTitle className="flex justify-center">
                            <LogoLabYes
                                className="h-9"
                                primaryFill="hsl(var(--logo-primary))"
                                secondaryFill="hsl(var(--logo-secondary))"
                            />
                        </SheetTitle>
                        <SheetDescription className="flex justify-center">
                            Navegue pelas nossas páginas, através do menu.
                        </SheetDescription>
                    </SheetHeader>
                    <div>
                        <MenuNavigationLink
                            href="/"
                            title="Home"
                            type="mobile"
                        />

                        <MenuNavigationLink
                            href="/quemsomos"
                            title="Quem somos"
                            type="mobile"
                        />
                        <MenuNavigationLink
                            href="/conexoes"
                            title="Conexões"
                            type="mobile"
                        />
                        <MenuNavigationLink
                            href="/produtos"
                            title="Produtos"
                            type="mobile"
                        />
                    </div>
                    <SheetFooter className="flex flex-row">
                        <Button
                            type="button"
                            className="w-full rounded-full bg-primary text-base font-bold text-primary-foreground"
                            size={'lg'}
                            asChild
                        >
                            {/* Quando a classe pai possui estilização, a classe pai concatena com sua estilização com o da classe filha */}
                            <MenuNavigationLink
                                href="/contato"
                                title="Fale conosco"
                                type="mobile"
                            />
                        </Button>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    )
}
