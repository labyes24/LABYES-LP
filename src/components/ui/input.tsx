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
                        'peer h-8 w-full min-w-0 rounded-lg border border-input bg-ly-white px-4 py-2 text-sm text-ly-dark-azure-850 outline-none transition-colors file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-ly-dark-azure-600/70 invalid:border-[#AA3B2B] invalid:ring-1 invalid:ring-[#AA3B2B] focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-ly-white/50 disabled:opacity-50 aria-[invalid=true]:border-[#AA3B2B] aria-[invalid=true]:pr-9 aria-[invalid=true]:ring-1 aria-[invalid=true]:ring-[#AA3B2B] aria-[invalid=true]:focus-visible:ring-2 sm:h-9',
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                <OctagonX
                    size={16}
                    className="absolute right-4 top-1/2 size-4 -translate-y-1/2 text-[#AA3B2B] opacity-0 transition-opacity duration-200 peer-invalid:opacity-100 peer-aria-[invalid=true]:opacity-100"
                    aria-hidden="true"
                />
            </div>
        )
    }
)
Input.displayName = 'Input'

export { Input }
