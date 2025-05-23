import { Redo } from 'lucide-react'
export interface AboutHistoryTimelineItemProps {
    title: string
    description: React.ReactNode

    icon?: React.ElementType
}
export function AboutHistoryTimelineItem({
    title,
    description,
    icon: Icon,
}: AboutHistoryTimelineItemProps) {
    return (
        <div className="relative flex h-fit w-fit flex-col items-start justify-start gap-6 px-0 py-3 last:pb-16 lg:h-64 lg:items-center lg:px-3 lg:pb-0">
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
            <div className="absolute left-9 top-20 flex w-80 flex-col items-center justify-end gap-2 px-6 font-sans lg:left-auto lg:top-32">
                <h3 className="font-semibold text-ly-dark-azure-600 lg:text-xl">
                    {title}
                </h3>
                <p className="max-w-md text-center text-sm text-ly-dark-azure-700">
                    {description}
                </p>
            </div>
        </div>
    )
}
