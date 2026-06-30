import * as React from 'react'

import { cn } from '@/lib/utils'

const InputError = React.forwardRef<
    HTMLSpanElement,
    React.ComponentProps<'span'> & { message?: string }
>(({ className, message, ...props }, ref) => {
    return (
        <div className="items-left flex min-h-5">
            {message && (
                <span
                    role="alert"
                    className={cn(
                        'min-h-5 w-full p-0 text-sm/[1.1] invalid:ring-destructive focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-ly-white/50 disabled:opacity-50',
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
