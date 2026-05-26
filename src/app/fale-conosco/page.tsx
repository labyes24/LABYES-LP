import { Metadata } from 'next'

import { navigation } from '@/lib/navigation'

export const metadata: Metadata = {
    title: navigation.CTA.title,
}

export default function ContactUsPage() {
    return (
        <>
            <section className="m-auto flex flex-col items-center gap-[15px] bg-[url('/img/scribble.svg')] bg-cover bg-center px-4 pb-[78.94px] pt-[78.76px] sm:pb-[105px] sm:pt-[90px] lg:pb-[126px] lg:pt-[76.36px]">
                <h1 className="text-center text-[1.645rem] font-bold leading-none text-primary sm:text-[2.025rem] lg:text-[2.25rem]">
                    #boraláserfeliz!
                </h1>
                <div className="flex max-w-[374px] flex-col gap-1.5 text-center text-[0.8225rem] font-bold leading-[1.175rem] sm:max-w-[480px] lg:max-w-[40.625rem]">
                    <p>
                        Do primeiro passo à maestria corporativa. O Lab Yes! não
                        é um curso, é onde você joga o jogo real atuando em
                        projetos, vivendo cerimônias ágeis e entendendo o
                        conceito de time na prática. Unimos todas as áreas do
                        mercado à cultura tech para você evoluir seu processo em
                        um ambiente seguro.
                    </p>
                    <p>Seja qual for a sua faixa, o seu lugar é aqui.</p>
                </div>
            </section>
        </>
    )
}
