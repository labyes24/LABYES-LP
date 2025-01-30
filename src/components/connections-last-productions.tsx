import Link from 'next/link'

import { LastProductionItem } from '@/components/last-production-item'
import { Button } from './ui/button'

export function ConnectionsLastProduction() {
    return (
        <section className="flex w-full flex-col items-center justify-center gap-12 px-6 pb-[75px] pt-16 md:pt-32">
            <div className="mx-auto flex max-w-[430px] flex-col items-center justify-center text-center text-ly-dark-azure-600 md:max-w-[614px]">
                <h2 className="mb-4 text-pretty font-sans text-[28px]/[38px] font-bold md:text-4xl md:leading-tight">
                    Últimas produções
                </h2>

                <p className="text-pretty font-sans text-base font-normal leading-7 text-ly-dark-azure-600 md:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    volutpat gravida malesuada quam commodo id integer nam.
                </p>
            </div>

            <div className="flex w-full max-w-[430px] flex-col items-center justify-center gap-6 text-center text-ly-dark-azure-600 md:max-w-full md:flex-row md:flex-wrap md:gap-7">
                <LastProductionItem
                    title="Projeto 1"
                    description="Lorem ipsum dolor sit"
                />

                <LastProductionItem
                    title="Projeto 2"
                    description="Lorem ipsum dolor sit"
                />

                <LastProductionItem
                    title="Projeto 3"
                    description="Lorem ipsum dolor sit"
                />
            </div>

            <Link href={'/projetos'}>
                <Button
                    type="button"
                    className="rounded-full bg-ly-orange-400 px-6 py-3 text-center font-sans text-lg font-bold leading-relaxed text-ly-white hover:bg-ly-orange-500"
                    size={'lg'}
                >
                    Mais projetos
                </Button>
            </Link>
        </section>
    )
}
