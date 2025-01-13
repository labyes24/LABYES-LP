import { cn } from '@/lib/utils'

interface DoodleLightProps {
    className?: string
}
export function DoodleLight({ className }: DoodleLightProps) {
    return (
        <svg
            width="164"
            height="166"
            viewBox="0 0 164 166"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('h-6 w-32 flex-shrink-0', className)}
        >
            <g clipPath="url(#clip0_360_3250)">
                <path
                    d="M103.693 23.4046C98.6779 29.1888 97.3305 35.729 95.0552 42.9121C92.1007 52.2394 89.1172 61.4908 86.5081 70.923"
                    stroke="#FF9500"
                    strokeWidth="7"
                    strokeLinecap="round"
                />
                <path
                    d="M80.0853 87.222C74.8771 95.765 72.5324 105.066 70.0043 114.68C67.6034 123.81 65.5202 133.016 63.4187 142.218"
                    stroke="#FF9500"
                    strokeWidth="7"
                    strokeLinecap="round"
                />
                <path
                    d="M21.0623 68.6131C27.8782 68.0954 33.4622 69.967 39.947 71.7957C49.7585 74.5623 59.4284 76.6169 69.4961 78.142"
                    stroke="#FF9500"
                    strokeWidth="7"
                    strokeLinecap="round"
                />
                <path
                    d="M91.7695 83.0353C108.408 87.7956 125.381 90.8066 142.31 94.323"
                    stroke="#FF9500"
                    strokeWidth="7"
                    strokeLinecap="round"
                />
                <path
                    d="M97.6343 76.1801L106.219 68.5876"
                    stroke="#FF9500"
                    strokeWidth="7"
                    strokeLinecap="round"
                />
                <path
                    d="M65.6009 90.5522L57.0405 94.5461"
                    stroke="#FF9500"
                    strokeWidth="7"
                    strokeLinecap="round"
                />
                <path
                    d="M95.153 98.3228L99.9341 104.809"
                    stroke="#FF9500"
                    strokeWidth="5"
                    strokeLinecap="round"
                />
                <path
                    d="M73.654 61.3787C67.5698 56.8843 62.5817 51.6911 57.1414 46.4719"
                    stroke="#FF9500"
                    strokeWidth="7"
                    strokeLinecap="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_360_3250">
                    <rect
                        width="127"
                        height="130"
                        fill="white"
                        transform="translate(43.666) rotate(19.6271)"
                    />
                </clipPath>
            </defs>
        </svg>
    )
}
