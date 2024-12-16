import { Menu } from 'lucide-react'
import Image from 'next/image'
import logoLabYes from '../../public/logo.svg'
import { NavigationLink } from './navigation-link'
import { Button } from './ui/button'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from './ui/sheet'

export function MenuNavigationMobile() {
    return (
        <div className="flex md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button asChild className="p-0" variant={'ghost'}>
                        <Menu
                            className="h-8 w-8 flex-shrink-0 text-ly-dark-azure-700"
                            strokeWidth={2}
                        />
                    </Button>
                </SheetTrigger>
                <SheetContent className="flex flex-col gap-6">
                    <SheetHeader>
                        <SheetTitle>
                            <Button
                                asChild
                                variant={'link'}
                                className="h-4 w-fit select-none p-0 hover:cursor-pointer hover:bg-transparent md:h-8"
                            >
                                <Image
                                    src={logoLabYes}
                                    priority={true}
                                    draggable={false}
                                    alt="Logo 'Lab Yes!'"
                                    className="rounded-lg object-cover"
                                />
                            </Button>
                        </SheetTitle>
                        <SheetDescription>
                            Navegue pelas nossas páginas, através do menu.
                        </SheetDescription>
                    </SheetHeader>
                    <div>
                        <SheetClose asChild>
                            <NavigationLink
                                href="/"
                                title="Home"
                                type="mobile"
                            />
                        </SheetClose>
                        <SheetClose asChild>
                            <NavigationLink
                                href="/quemsomos"
                                title="Quem somos"
                                type="mobile"
                            />
                        </SheetClose>
                        <SheetClose asChild>
                            <NavigationLink
                                href="/conexoes"
                                title="Conexões"
                                type="mobile"
                            />
                        </SheetClose>
                        <SheetClose asChild>
                            <NavigationLink
                                href="/projetos"
                                title="Projetos"
                                type="mobile"
                            />
                        </SheetClose>
                    </div>
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button
                                type="button"
                                className="rounded-full bg-ly-orange-400 text-base font-bold text-ly-white hover:bg-ly-orange-500"
                                size={'lg'}
                            >
                                Fale conosco
                            </Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    )
}
