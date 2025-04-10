import { cn } from '@/lib/utils'

interface DoodleHeartArrowProps {
    className?: string
}
export function DoodleHeartArrow({ className }: DoodleHeartArrowProps) {
    return (
        <svg
            width="134"
            height="147"
            viewBox="0 0 134 147"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('h-6 w-32 flex-shrink-0', className)}
            aria-hidden="true"
        >
            <path
                d="M127.029 115.177C129.586 85.6935 144.263 12.9854 98.6725 3.80603C72.3924 -1.48461 69.0819 28.4781 69.5263 46.6656C69.7284 54.934 70.7288 62.862 71.7385 71.0259C72.0851 73.8281 74.991 80.8624 72.5413 79.4584C68.8066 77.318 65.3676 70.4604 61.6846 67.4629C56.5899 63.3164 51.024 60.3469 44.7099 58.4673C33.3505 55.0856 9.26573 51.6473 3.99587 67.3888C-2.79605 87.6764 29.1357 111.472 44.5085 119.336C57.5248 125.995 72.8145 131.959 87.1635 134.849C88.8701 135.192 101.341 138.904 94.7077 134.636C89.2597 131.131 82.8397 126.739 79.1934 121.254C75.6281 115.891 90.313 127.76 95.9946 130.792C107.215 136.779 88.6711 140.678 83.0588 144.409"
                stroke="#AA3B2B"
                strokeWidth="5"
                strokeLinecap="round"
            />
        </svg>
    )
}
