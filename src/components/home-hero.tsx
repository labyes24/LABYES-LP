import HeroLoopGif from '@/assets/home_hero_image_loop.gif'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

export function HomeHero() {
    return (
        <section className="flex flex-col items-center justify-between gap-10 bg-section-dark px-6 py-16 text-section-dark-foreground lg:flex-row lg:px-28 lg:py-32">
            <div className="flex flex-col justify-center gap-10 lg:justify-start">
                <div className="flex max-w-[554px] flex-col justify-center gap-5 text-center lg:justify-start lg:text-start">
                    <h1 className="text-4xl font-semibold lg:text-5xl">
                        Lapidando talentos para o{' '}
                        <span className="text-primary">mercado tech</span>
                    </h1>
                    <p className="text-pretty p-1 text-lg font-light leading-7 tracking-widest lg:text-sm">
                        Conseguir uma vaga em tecnologia pode ser um desafio,
                        seja para quem está dando os primeiros passos ou para
                        quem já tem alguma experiência, mas ainda busca a
                        confiança necessária para seguir no mercado. Com o apoio
                        certo, esse caminho pode se tornar muito mais tranquilo.
                    </p>
                </div>
                <Button
                    className="mx-auto w-fit rounded-full py-6 font-bold lg:mx-0 lg:text-lg"
                    size={'lg'}
                    asChild
                >
                    <Link href={'/contato'}>
                        Quero Participar
                        <ArrowRight className="!h-5 !w-5 lg:!h-7 lg:!w-7" />
                    </Link>
                </Button>
            </div>
            <Image
                src={HeroLoopGif}
                alt="Video chamadas em loop"
                priority
                unoptimized
                width={650}
                height={520}
                className="hidden object-cover lg:flex"
            />
            <Image
                src={HeroLoopGif}
                alt="Video chamadas em loop"
                unoptimized
                width={325}
                height={260}
                className="object-cover lg:hidden"
            />
        </section>
    )
}
