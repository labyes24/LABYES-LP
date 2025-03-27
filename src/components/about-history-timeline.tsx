import { Lightbulb, PackageCheck, UsersRound } from 'lucide-react'
import Link from 'next/link'
import {
    AboutHistoryTimelineItem,
    AboutHistoryTimelineItemProps,
} from './about-history-timeline-item'
import { AboutHistoryLine } from './svg/about-history-line'

export function AboutHistoryTimeline() {
    const timelineData: AboutHistoryTimelineItemProps[] = [
        {
            title: 'Ideação',
            description: (
                <>
                    Como parte da comunidade, percebemos que o mercado real é
                    fechado para novos devs. Com isso, imaginamos uma ponte
                    entre os recém-formados e o mercado real, nascendo assim o{' '}
                    <span className="font-bold">Lab Yes!</span>
                </>
            ),
            icon: Lightbulb,
        },
        {
            title: 'O início',
            description: (
                <>
                    Em março de 2023, com um time pequeno, mas altamente
                    comprometido, superamos desafios e entregamos projetos de
                    sucessos, conquistando a confiança do cliente e abrindo
                    novas oportunidades para o{' '}
                    <span className="font-bold">Lab Yes!</span>
                </>
            ),
            icon: UsersRound,
        },
        {
            title: 'Primeiros Produtos',
            description: (
                <>
                    Desenvolvemos nove landing pages, incluindo perfis dos
                    corretores, cards de imóveis com modal e formulários,
                    atendendo às necessidades específicas da{' '}
                    <Link
                        href="https://www.rkimoveis.com.br/"
                        className="font-bold"
                    >
                        RK Imóveis.
                    </Link>{' '}
                    A empresa nos impulsionou fortemente permitindo-nos entregar
                    soluções personalizadas e eficazes.
                </>
            ),
            icon: PackageCheck,
        },
    ]

    return (
        <div className="flex flex-col items-start justify-center px-3 pb-20 lg:flex-row lg:px-0">
            {timelineData.map(({ title, description, icon }, index) => (
                <div
                    key={index}
                    className="flex flex-col items-start justify-center lg:flex-row"
                >
                    <AboutHistoryTimelineItem
                        title={title}
                        description={description}
                        icon={icon}
                    />
                    {index < timelineData.length - 1 && <AboutHistoryLine />}
                </div>
            ))}
        </div>
    )
}
