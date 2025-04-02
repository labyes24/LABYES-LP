'use client'

import { AlertTriangle, LoaderCircle, Send } from 'lucide-react'
import Form from 'next/form'
import { useActionState, useEffect, useState } from 'react'

import { type sendEmail } from '@/app/actions/send-email'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

export interface FormStateType {
    data: string
    success?: boolean
    error?: string
}

const INITIAL_STATE: FormStateType = { data: '' }

const DEFAULT_MESSAGES = {
    dev: <>Estamos prontos para ajudar você a alcançar seus objetivos!</>,
    enterprise: (
        <>Estamos prontos para ajudar você a alcançar seus objetivos!</>
    ),
    success: (
        <span className="flex items-center justify-center gap-2 text-form-success">
            <Send className="size-3.5" /> Sua mensagem foi enviada com sucesso!
        </span>
    ),
    error: (
        <span className="flex items-center justify-center gap-2 text-form-error">
            <AlertTriangle className="size-3.5" /> Ocorreu um erro ao enviar sua
            mensagem.
        </span>
    ),
}

interface ContactFormProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
    sendEmailAction: typeof sendEmail
}

export function ContactForm({ sendEmailAction, className }: ContactFormProps) {
    const [activeButton, setActiveButton] = useState<'dev' | 'enterprise'>(
        'dev'
    )
    const [formState, formAction, pending] = useActionState(
        (state: FormStateType, formData: FormData) =>
            sendEmailAction(state, formData, activeButton),
        INITIAL_STATE,
        undefined
    )
    const [feedbackMessage, setFeedbackMessage] = useState(
        DEFAULT_MESSAGES[activeButton]
    )
    const [shouldResetMessage, setShouldResetMessage] = useState(false)

    const isDev = activeButton === 'dev'

    const getMessagePlaceholder = () =>
        isDev
            ? 'Conte-nos sobre sua experiência ou dúvidas'
            : 'Descreva o que você precisa'

    const resetFeedbackMessage = () => {
        setFeedbackMessage(DEFAULT_MESSAGES[activeButton])
    }

    const handleClickButton = (type: 'dev' | 'enterprise') => {
        setActiveButton(type)
        setFeedbackMessage(DEFAULT_MESSAGES[type])
        handleClickOrFocus()
    }

    const handleClickOrFocus = () => {
        if (shouldResetMessage) {
            resetFeedbackMessage()
            setShouldResetMessage(false)
        }
    }

    useEffect(() => {
        if (pending) {
            setShouldResetMessage(true)
        }
    }, [pending])

    useEffect(() => {
        if (!pending && shouldResetMessage) {
            setFeedbackMessage(
                formState.success
                    ? DEFAULT_MESSAGES.success
                    : DEFAULT_MESSAGES.error
            )
        }
    }, [pending, shouldResetMessage, formState.success])

    return (
        <div
            className={cn(
                'flex w-11/12 max-w-[390px] flex-col items-center justify-start gap-7 rounded-2xl bg-form p-8 text-form-foreground lg:justify-center lg:p-12',
                className
            )}
        >
            <div className="flex w-full flex-row items-center gap-2">
                {['dev', 'enterprise'].map((type) => (
                    <Button
                        key={type}
                        type="button"
                        className={cn(
                            'flex h-fit w-full items-center justify-center py-1 font-semibold text-primary-foreground hover:bg-primary',
                            {
                                'bg-ly-orange-400': activeButton === type,
                                'bg-ly-brown': activeButton !== type,
                                'rounded-l-full': type === 'dev',
                                'rounded-r-full': type === 'enterprise',
                            }
                        )}
                        onClick={() =>
                            handleClickButton(type as 'dev' | 'enterprise')
                        }
                    >
                        {type === 'dev' ? 'Talentos' : 'Empresa'}
                    </Button>
                ))}
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1 leading-none">
                <h3 className="font-sans text-xl font-bold lg:text-2xl">
                    Entre em contato
                </h3>
                <p className="text-start font-sans text-sm leading-tight">
                    {isDev
                        ? 'Queremos ajudar na sua jornada!'
                        : 'Transformamos ideias em soluções!'}
                </p>
            </div>

            <Form action={formAction} className="flex w-full flex-col gap-6">
                {['name', 'email'].map((field) => (
                    <div
                        key={field}
                        className="flex w-full flex-col justify-center"
                    >
                        <label htmlFor={field}></label>
                        <Input
                            type={field === 'email' ? 'email' : 'text'}
                            id={field}
                            name={field}
                            className="w-full rounded-full bg-input p-5 text-sm !placeholder-muted/50 lg:text-base"
                            placeholder={field === 'email' ? 'E-mail' : 'Nome'}
                            required
                            onFocus={handleClickOrFocus}
                        />
                    </div>
                ))}

                <div className="flex w-full flex-col justify-center">
                    <label htmlFor="message"></label>
                    <Textarea
                        id="message"
                        name="message"
                        placeholder={getMessagePlaceholder()}
                        className="h-28 w-full resize-none rounded-2xl bg-input p-3 text-sm !placeholder-muted/50 lg:text-base"
                        required
                        onFocus={handleClickOrFocus}
                    />
                </div>

                <p className="text-center font-sans text-sm">
                    {feedbackMessage}
                </p>

                <div className={cn(pending && 'cursor-not-allowed')}>
                    <Button
                        type="submit"
                        disabled={pending}
                        className={cn(
                            'flex w-full items-center justify-center rounded-full text-sm font-semibold',
                            pending && 'pointer-events-none'
                        )}
                        size={'lg'}
                        variant={pending ? 'secondary' : 'default'}
                    >
                        {pending && <LoaderCircle className="animate-spin" />}
                        Enviar mensagem
                    </Button>
                </div>
            </Form>
        </div>
    )
}
