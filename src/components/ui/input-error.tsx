import * as React from 'react'

import { cn } from '@/lib/utils'

const InputError = React.forwardRef<
    HTMLSpanElement,
    React.ComponentProps<'span'> & { message?: string }
>(({ className, message, ...props }, ref) => {
    return (
        <div className="items-left flex h-5">
            {message && (
                <span
                    role="alert"
                    className={cn(
                        'w-full p-0 text-sm invalid:ring-destructive focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-ly-white/50 disabled:opacity-50 md:text-sm',
                        className
                    )}
                    ref={ref}
                    {...props}
                >
                    {message}
                </span>
            )}
        </div>
    )
})
InputError.displayName = 'InputError'

export { InputError }
