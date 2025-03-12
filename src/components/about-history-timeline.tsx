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
                'Como parte da comunidade percebi que o mercado real é fechado para novos devs. Com isso, imaginei uma ponte entre o recém-formado e o mercado real, nascia assim o Lab Yes!',
            icon: Lightbulb,
        },
        {
            title: 'Primeiros Devs',
            description:
                'Francisco Ylderlan foi o primeiro dev a acreditar no projeto e a segunda pessoa impulsionadora do Lab Yes!. Em março de 2022 com uma equipe de três pessoas mais o dev senior Adriano, trilhamos o caminho para um projeto de cliente real.',
            icon: UsersRound,
        },
        {
            title: 'Primeiros Projetos',
            description:
                'Fechamos a parceria com a RK Imóveis e com a chegada dos novos membros, começamos o desenvolvimento do nosso primeiro projeto.',
            icon: PackageCheck,
        },
    ]
    return (
        <div className="flex flex-col items-start justify-center px-20 pb-20 lg:flex-row lg:px-0">
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
