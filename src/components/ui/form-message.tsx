'use client'

import * as React from 'react'
import { forwardRef, useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

const DELAY_BEFORE_FADE = 5000

const FormMessage = forwardRef<
    HTMLSpanElement,
    React.ComponentProps<'span'> & {
        type?: 'error' | 'success'
        message?: string
        messageId?: number
    }
>(({ className, type = 'success', message, messageId, ...props }, ref) => {
    const [isMounted, setIsMounted] = useState(Boolean(message))
    const [isVisible, setIsVisible] = useState(Boolean(message))

    useEffect(() => {
        let unmountTimer: number | undefined

        if (!message) {
            setIsVisible(false)
            setIsMounted(false)
            return undefined
        }

        setIsMounted(true)
        setIsVisible(true)

        const fadeTimer = window.setTimeout(() => {
            setIsVisible(false)
            unmountTimer = window.setTimeout(() => {
                setIsMounted(false)
            }, 500)
        }, DELAY_BEFORE_FADE)

        return () => {
            if (fadeTimer) {
                window.clearTimeout(fadeTimer)
            }

            if (unmountTimer) {
                window.clearTimeout(unmountTimer)
            }
        }
    }, [message, messageId])

    if (!isMounted || !message) {
        return (
            <div className="flex h-0 items-center transition-[height] duration-100" />
        )
    }

    return (
        <div className="mb-3 flex h-10 items-center transition-[height] duration-100">
            {message && (
                <span
                    data-type={type}
                    role="alert"
                    className={cn(
                        'min-h-10 w-full rounded-full bg-[#37C370] px-6 py-3 text-center text-sm font-semibold leading-none text-[#1E2536] opacity-0 transition-colors duration-700 data-[type=error]:bg-[#FE7460] data-[type=error]:text-[#1E2536] sm:text-lg sm:leading-none',
                        isVisible && 'opacity-100',
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
FormMessage.displayName = 'FormMessage'

export { FormMessage }
