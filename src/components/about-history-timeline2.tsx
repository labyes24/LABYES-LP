import { Lightbulb, PackageCheck, Presentation, UsersRound } from 'lucide-react'
import {
    AboutHistoryTimelineLine2,
    AboutHistoryTimelineLine2Props,
} from './about-history-timeline-line2'
import { AboutHistorySunDoodle } from './svg/about-history-sun-doodle'
import { AboutHistoryWritingDoodle } from './svg/about-history-writing-doodle'

export function AboutHistoryTimeline2() {
    const timelineData: AboutHistoryTimelineLine2Props[] = [
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

            className: ' lg:mb-14',
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
            className: 'lg:mb-28',
        },
    ]
    return (
        <div className="relative">
            <AboutHistoryWritingDoodle className="absolute -bottom-10 right-8 lg:bottom-0 lg:right-16" />
            <AboutHistorySunDoodle className="absolute left-24" />
            <div className="mb-8 mt-56 flex flex-col items-center justify-center lg:flex-row lg:items-end lg:justify-center lg:px-8">
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
        </div>
    )
}
