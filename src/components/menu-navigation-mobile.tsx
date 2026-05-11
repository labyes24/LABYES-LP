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

import { navigation } from '@/lib/navigation'

export function MenuNavigationMobile() {
    const { links, CTA } = navigation

    return (
        <div className="flex lg:hidden">
            <Sheet>
                <SheetTrigger
                    className="rounded-md p-1 outline-2 focus:outline-none focus-visible:outline-primary"
                    aria-label="abrir menu de navegação"
                >
                    <Menu
                        className="h-8 w-8 flex-shrink-0 text-foreground"
                        strokeWidth={2}
                    />
                </SheetTrigger>

                <SheetContent
                    className="flex flex-col gap-6"
                    closeSheetSRDescription="Fechar menu"
                >
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

                    <div className="flex flex-col items-center gap-2">
                        {links.map((link) => (
                            <MenuNavigationLink
                                key={link.href}
                                href={link.href}
                                title={link.title}
                                type="mobile"
                            />
                        ))}
                    </div>

                    <SheetFooter className="flex flex-row">
                        <Button
                            className="w-full rounded-full border-2 border-transparent bg-primary text-base font-bold text-background transition-colors duration-300 focus:border-primary focus:bg-primary/50 focus:text-primary-foreground focus:outline-none"
                            size={'lg'}
                            asChild
                        >
                            <MenuNavigationLink
                                href={CTA.href}
                                title={CTA.title}
                                type="mobile"
                            />
                        </Button>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    )
}
