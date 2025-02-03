import { Redo } from 'lucide-react'
export interface AboutHistoryTimelineItemProps {
    title: string
    description: string

    icon?: React.ElementType
}
export function AboutHistoryTimelineItem({
    title,
    description,
    icon: Icon,
}: AboutHistoryTimelineItemProps) {
    return (
        <div className="relative flex h-fit w-fit flex-col items-start justify-start gap-6 py-3 lg:h-64 lg:items-center lg:px-3">
            <span className="flex w-fit items-center justify-center rounded-2xl bg-ly-dark-azure-600/10 p-6 text-ly-dark-azure-800">
                {Icon ? (
                    <Icon
                        className="h-8 w-8 lg:h-11 lg:w-11"
                        strokeWidth={2.5}
                    />
                ) : (
                    <Redo
                        className="h-8 w-8 lg:h-11 lg:w-11"
                        strokeWidth={2.5}
                    />
                )}
            </span>
            <div className="absolute -left-6 top-28 flex w-64 flex-col items-center justify-end gap-2 px-6 lg:left-auto lg:top-32">
                <h3 className="font-semibold text-ly-dark-azure-600 lg:text-xl">
                    {title}
                </h3>
                <p className="text-center text-sm text-ly-dark-azure-700">
                    {description}
                </p>
            </div>
        </div>
    )
}
