import { OctagonX } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
    ({ className, type, ...props }, ref) => {
        return (
            <div className="relative">
                <input
                    type={type}
                    className={cn(
                        'peer h-8 w-full min-w-0 rounded-lg border border-input bg-ly-white px-4 py-2 text-base text-ly-dark-azure-850 outline-none transition-colors file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:italic placeholder:text-ly-dark-azure-600/70 invalid:border-destructive invalid:ring-1 invalid:ring-destructive focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-ly-white/50 disabled:opacity-50 aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-1 aria-[invalid=true]:ring-destructive aria-[invalid=true]:focus-visible:ring-2 sm:h-9 md:text-sm',
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                <OctagonX
                    size={16}
                    className="absolute right-4 top-1/2 size-4 -translate-y-1/2 text-destructive opacity-0 transition-opacity duration-200 peer-invalid:opacity-100 peer-aria-[invalid=true]:opacity-100"
                />
            </div>
        )
    }
)
Input.displayName = 'Input'

export { Input }
