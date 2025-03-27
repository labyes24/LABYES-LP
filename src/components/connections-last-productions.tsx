import Link from 'next/link'

import LablinksIcon from '@/assets/lablinks-icon.svg'
import LabyesIcon from '@/assets/labyes-icon.svg'
import RKIcon from '@/assets/rk-icon.svg'
import { LastProductionItem } from '@/components/last-production-item'
import { Button } from './ui/button'

const lastProductions = [
    {
        id: 1,
        image: RKIcon,
        title: 'RK Imóveis',
        subtitle: 'Criação de landing pages',
    },
    {
        id: 2,
        image: LablinksIcon,
        title: 'Lab Links',
        subtitle: 'Display de link dos integrantes',
    },
    {
        id: 3,
        image: LabyesIcon,
        title: 'Site Lab Yes!',
        subtitle: 'Criação de site institucional',
    },
]

export function ConnectionsLastProduction() {
    return (
        <section className="flex w-full flex-col items-center justify-center gap-12 bg-section-medium px-6 pb-[75px] pt-16 md:pt-32">
            <div className="mx-auto flex max-w-[430px] flex-col items-center justify-center text-center text-section-medium-foreground md:max-w-[614px]">
                <h2 className="mb-4 text-pretty font-sans text-[28px]/[38px] font-bold md:text-4xl md:leading-tight">
                    Produtos em destaque
                </h2>

                <p className="text-pretty px-4 font-sans text-base font-normal leading-7 text-section-medium-foreground md:text-lg">
                    Aqui estão alguns dos produtos desenvolvidos pelo{' '}
                    <span className="font-bold">Time Lab Yes!</span>.
                </p>
                <p className="text-pretty font-sans text-base font-normal leading-7 text-section-medium-foreground md:text-lg">
                    Não deixe de conferir.
                </p>
            </div>

            <div className="flex w-full max-w-[430px] flex-col items-center justify-center gap-6 text-center text-ly-dark-azure-600 md:max-w-full md:flex-row md:flex-wrap md:gap-7">
                {lastProductions.map((production) => (
                    <LastProductionItem
                        key={production.id}
                        title={production.title}
                        image={production.image}
                        description={production.subtitle}
                    />
                ))}
            </div>

            <Button
                asChild
                type="button"
                className="rounded-full bg-ly-orange-400 px-6 py-3 text-center font-sans text-lg font-bold leading-relaxed text-ly-white hover:bg-ly-orange-500"
                size={'lg'}
            >
                <Link href={'/produtos'}>Saiba mais</Link>
            </Button>
        </section>
    )
}
