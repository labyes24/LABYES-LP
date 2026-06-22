import { OctagonX } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const Textarea = React.forwardRef<
    HTMLTextAreaElement,
    React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
    return (
        <div className="relative">
            <textarea
                className={cn(
                    'field-sizing-content aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 peer flex min-h-16 w-full rounded-lg border border-input bg-ly-white p-6 px-2.5 py-2 text-base text-ly-dark-azure-850 outline-none transition-colors placeholder:italic placeholder:text-ly-dark-azure-600/70 focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-1 aria-[invalid=true]:ring-destructive aria-[invalid=true]:focus-visible:ring-2 sm:h-9 md:text-sm',
                    className
                )}
                ref={ref}
                {...props}
            />
            <OctagonX
                size={16}
                className="absolute right-6 top-6 size-4 text-destructive opacity-0 transition-opacity duration-200 peer-invalid:opacity-100 peer-aria-[invalid=true]:opacity-100"
            />
        </div>
    )
})
Textarea.displayName = 'Textarea'

export { Textarea }
