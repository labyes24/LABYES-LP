import { LastProductionItem } from '@/components/last-production-item'
import Link from 'next/link'
import { Button } from './ui/button'

export function ConnectionsLastProduction() {
    return (
        <section className="mb-[75px] mt-[60px] flex w-full flex-col items-center justify-center gap-9 p-4">
            <div className="mx-auto flex max-w-[430px] flex-col items-center justify-center text-center text-ly-dark-azure-600">
                <h2 className="mb-4 text-pretty font-sans text-[28px]/[38px] font-bold">
                    Últimas produções
                </h2>

                <p className="text-pretty font-sans text-base/[28px] font-normal text-ly-dark-azure-600">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    volutpat gravida malesuada quam commodo id integer nam.
                </p>
            </div>
            <div className="mx-auto mb-6 flex max-w-[430px] flex-col items-center justify-center text-center text-ly-dark-azure-600">
                <LastProductionItem
                    title="Projeto 1"
                    description="Lorem ipsum dolor sit"
                />
                <LastProductionItem
                    title="Projeto 2"
                    description="Lorem ipsum dolor sit"
                />
            </div>
            <Button
                type="button"
                className="mt-12 rounded-full bg-ly-orange-400 px-6 py-3 text-center font-sans text-lg/[18px] font-bold text-ly-white hover:bg-ly-orange-500"
                size={'sm'}
            >
                <Link href={'/projetos'}>Mais projetos</Link>
            </Button>
        </section>
    )
}
