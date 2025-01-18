import { cn } from '@/lib/utils'
import { AboutHistoryTimelineItem2 } from './about-history-timeline-item2'

export interface AboutHistoryTimelineItemDetails {
    title: string
    description: string
    date: string
    color: string
    type: 'start' | 'end'
    icon?: React.ElementType
}

export interface AboutHistoryTimelineLineProps {
    indexItem: number
    startColor: string
    endColor: string
    startPoint?: AboutHistoryTimelineItemDetails
    endPoint?: AboutHistoryTimelineItemDetails
    className?: string
}

export function AboutHistoryTimelineLine2({
    indexItem,
    startColor,
    endColor,
    startPoint,
    endPoint,
    className,
}: AboutHistoryTimelineLineProps) {
    const hexStartColor = startColor.replace('bg-[', '').replace(']', '')
    const hexEndColor = endColor.replace('bg-[', '').replace(']', '')
    return (
        <div
            key={indexItem}
            className={cn(
                'relative flex size-fit items-end justify-end',
                className
            )}
        >
            {startPoint && (
                <AboutHistoryTimelineItem2
                    color={startPoint.color}
                    date={startPoint.date}
                    title={startPoint.title}
                    description={startPoint.description}
                    type={startPoint.type}
                    icon={startPoint.icon}
                />
            )}
            {endPoint && (
                <AboutHistoryTimelineItem2
                    color={endPoint.color}
                    date={endPoint.date}
                    title={endPoint.title}
                    description={endPoint.description}
                    type={endPoint.type}
                    icon={endPoint.icon}
                />
            )}
            <svg
                key={indexItem}
                width="352"
                height="147"
                viewBox="0 0 352 147"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M351.71 6.44564C340.631 41.627 320.039 73.0594 292.21 97.2676C264.381 121.476 230.4 137.517 194.023 143.617C157.646 149.717 120.291 145.639 86.0877 131.833C51.8842 118.028 22.1646 95.0324 0.214731 65.3898L16.8198 53.094C36.502 79.6742 63.1513 100.294 93.8213 112.673C124.491 125.053 157.987 128.709 190.606 123.239C223.225 117.769 253.695 103.386 278.649 81.6785C303.603 59.9713 322.068 31.7862 332.003 0.239346L351.71 6.44564Z"
                    fill={`url(#${indexItem})`}
                />
                <defs>
                    <linearGradient
                        id={`${indexItem}`}
                        x1="360.703"
                        y1="-10.1737"
                        x2="-12.8811"
                        y2="85.8373"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor={hexEndColor} />
                        <stop offset="1" stopColor={hexStartColor} />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}
