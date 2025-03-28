import { cn } from '@/lib/utils'
import { Redo } from 'lucide-react'

export interface AboutHistoryTimelineItem2Props {
    title: string
    description: string
    date: string
    color: string
    type: 'start' | 'end'
    icon?: React.ElementType
}

export function AboutHistoryTimelineItem2({
    description,
    title,
    color,
    date,
    type,
    icon: Icon,
}: AboutHistoryTimelineItem2Props) {
    const position =
        type === 'start'
            ? 'absolute z-10 -top-[232px] left-6 lg:-top-44 lg:-left-32'
            : 'absolute z-10 -bottom-6 left-6 lg:-bottom-auto lg:left-auto lg:-top-56 lg:-right-32'
    return (
        <div
            className={cn(
                position,
                'flex h-64 w-64 flex-col items-center justify-end gap-6'
            )}
        >
            <span
                className={cn(
                    color,
                    'flex w-fit items-center justify-center rounded-full p-4 text-ly-white'
                )}
            >
                {Icon ? (
                    <Icon className="h-8 w-8" strokeWidth={2.5} />
                ) : (
                    <Redo className="h-8 w-8" strokeWidth={2.5} />
                )}
            </span>
            <div className="flex w-60 flex-col items-center justify-end gap-2 px-6">
                <h3 className="font-semibold text-ly-dark-azure-600">
                    {title}
                </h3>
                <p className="text-center text-sm text-ly-dark-azure-700">
                    {description}
                </p>
            </div>
            <span
                className={cn(
                    color,
                    `flex items-center justify-center rounded-lg px-12 py-3 font-bold text-ly-white`
                )}
            >
                {date}
            </span>
        </div>
    )
}
