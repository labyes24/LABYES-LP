import { Lightbulb, PackageCheck, UsersRound } from 'lucide-react'
import {
    AboutHistoryTimelineItem,
    AboutHistoryTimelineItemProps,
} from './about-history-timeline-item'
import { AboutHistoryLine } from './svg/about-history-line'

export function AboutHistoryTimeline() {
    const timelineData: AboutHistoryTimelineItemProps[] = [
        {
            title: 'Ideação',
            description:
                'Concepção da iniciativa voluntária para ajudar devs juniores.',
            icon: Lightbulb,
        },
        {
            title: 'Primeiros Devs',
            description:
                'Entrada dos primeiros desenvolvedores juniores no projeto.',
            icon: UsersRound,
        },
        {
            title: 'Primeiros Projetos',
            description:
                'Entrega do primeiro produto e novos projetos com voluntários.',
            icon: PackageCheck,
        },
    ]
    return (
        <div className="flex flex-col items-start justify-center px-6 pb-16 lg:flex-row">
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
