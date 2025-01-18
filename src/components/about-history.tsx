import { Lightbulb, PackageCheck, Presentation, UsersRound } from 'lucide-react'
import {
    AboutHistoryTimelineLine2,
    AboutHistoryTimelineLineProps,
} from './about-history-timeline-line2'

export function AboutHistory() {
    const timelineData: AboutHistoryTimelineLineProps[] = [
        {
            indexItem: 0,
            startColor: 'bg-[#ff9500]',
            endColor: 'bg-[#EA4B6C]',
            startPoint: {
                title: 'Ideação',
                description:
                    'Concepção da iniciativa voluntária para ajudar devs juniores.',
                date: 'MAR/2023',
                color: 'bg-[#ff9500]',
                type: 'start',
                icon: Lightbulb,
            },
        },
        {
            indexItem: 1,
            startColor: 'bg-[#EA4B6C]',
            endColor: 'bg-[#ff9500]',
            startPoint: {
                title: 'Primeiros Apoios',
                description:
                    'Apresentamos o projeto aos primeiros apoiadores e colaboradores.',
                date: 'MAI/2023',
                color: 'bg-[#EA4B6C]',
                type: 'start',
                icon: Presentation,
            },
            className: 'mb-14',
        },
        {
            indexItem: 2,
            startColor: 'bg-[#ff9500]',
            endColor: 'bg-[#EA4B6C]',
            startPoint: {
                title: 'Primeiros Devs',
                description:
                    'Entrada dos primeiros desenvolvedores juniores no projeto.',
                date: 'AGO/2023',
                color: 'bg-[#ff9500]',
                type: 'start',
                icon: UsersRound,
            },
            endPoint: {
                title: 'Primeiros Projetos',
                description:
                    'Entrega do primeiro produto e novos projetos com voluntários.',
                date: 'ABR/2024',
                color: 'bg-[#EA4B6C]',
                type: 'end',
                icon: PackageCheck,
            },
            className: 'mb-28',
        },
    ]
    return (
        <section>
            <div className="mt-60 flex items-end justify-center p-32">
                {timelineData.map((data, index) => (
                    <AboutHistoryTimelineLine2
                        key={index}
                        indexItem={data.indexItem}
                        startColor={data.startColor}
                        endColor={data.endColor}
                        startPoint={data.startPoint}
                        endPoint={data.endPoint}
                        className={data.className}
                    />
                ))}
            </div>
        </section>
    )
}
