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

export interface AboutHistoryTimelineLine2Props {
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
}: AboutHistoryTimelineLine2Props) {
    const hexStartColor = startColor.replace('bg-[', '').replace(']', '')
    const hexEndColor = endColor.replace('bg-[', '').replace(']', '')
    return (
        <div
            key={indexItem}
            className={cn(
                'relative flex size-fit items-end justify-end pr-[192px] lg:pr-0',
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
                className="hidden lg:flex"
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

            <svg
                width="96"
                height="286"
                viewBox="0 0 96 286"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lg:hidden"
            >
                <path
                    d="M87.5407 285.149C61.2855 271.682 39.2659 251.216 23.9164 226.015C8.56698 200.814 0.485551 171.859 0.565653 142.351C0.645755 112.844 8.88427 83.9328 24.3703 58.8153C39.8564 33.6978 61.9868 13.352 88.3147 0.0274048L95.5398 14.3032C71.8446 26.2954 51.9273 44.6066 37.9898 67.2123C24.0523 89.8181 16.6377 115.838 16.5656 142.395C16.4935 168.952 23.7668 195.011 37.5813 217.692C51.3958 240.373 71.2135 258.792 94.8432 270.913L87.5407 285.149Z"
                    fill={`url(#${indexItem}_)`}
                />
                <defs>
                    <linearGradient
                        id={`${indexItem}_`}
                        x1="99.4381"
                        y1="294.475"
                        x2="73.9501"
                        y2="-13.0495"
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
