'use client'

import { X } from 'lucide-react'
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
        return <div className="relative flex min-h-10 items-center" />
    }

    return (
        <div className="relative flex min-h-10 items-center">
            {message && (
                <>
                    <span
                        data-type={type}
                        role="alert"
                        className={cn(
                            'min-h-10 w-full rounded-full bg-[#1DA656] px-6 py-3 pr-11 text-sm leading-none text-ly-white opacity-100 transition-opacity duration-500 data-[type=error]:bg-destructive data-[type=error]:text-ly-white sm:text-lg sm:leading-none',
                            !isVisible && 'opacity-0',
                            className
                        )}
                        ref={ref}
                        {...props}
                    >
                        {message}
                    </span>
                    <X
                        className={cn(
                            'absolute right-5 top-1/2 size-4 -translate-y-1/2',
                            !isVisible && 'opacity-0'
                        )}
                    />
                </>
            )}
        </div>
    )
})
FormMessage.displayName = 'FormMessage'

export { FormMessage }
