'use client'
import { sendEmail } from '@/app/actions/send-email'
import { cn } from '@/lib/utils'
import { AlertTriangle, LoaderCircle, Send } from 'lucide-react'
import Form from 'next/form'
import { useActionState, useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

export interface FormStateType {
    data: string
    success?: boolean
    error?: string
}

const INITIAL_STATE: FormStateType = { data: '' }

export function ContactForm() {
    const [activeButton, setActiveButton] = useState<'dev' | 'enterprise'>(
        'dev'
    )
    const [formState, formAction, pending] = useActionState(
        (state: FormStateType, formData: FormData) =>
            sendEmail(state, formData, activeButton),
        INITIAL_STATE,
        undefined
    )

    const isDev = activeButton === 'dev'

    const getMessagePlaceholder = () =>
        isDev
            ? 'Conte-nos sobre sua experiência ou dúvidas'
            : 'Descreva o que você precisa'

    const getFeedbackMessage = () => {
        if (pending) {
            return isDev
                ? 'Estamos aqui para te apoiar no início da sua carreira!'
                : 'Estamos prontos para ajudar sua empresa a inovar e crescer!'
        }
        if (formState.success) {
            return (
                <span className="flex items-center justify-center gap-2 text-ly-green-500">
                    <Send className="size-3.5" /> Sua mensagem foi enviada com
                    sucesso!
                </span>
            )
        }
        if (formState.error) {
            return (
                <span className="flex items-center justify-center gap-2 text-ly-red">
                    <AlertTriangle className="size-3.5" /> Ocorreu um erro ao
                    enviar sua mensagem.
                </span>
            )
        }
        return isDev
            ? 'Estamos aqui para te apoiar no início da sua carreira!'
            : 'Estamos prontos para ajudar sua empresa a inovar e crescer!'
    }

    return (
        <div className="mx-auto mb-10 flex w-11/12 max-w-[390px] flex-col items-center justify-start gap-7 rounded-2xl bg-ly-white p-8 lg:justify-center lg:p-12">
            <div className="flex w-full flex-row items-center gap-2">
                {['dev', 'enterprise'].map((type) => (
                    <Button
                        key={type}
                        type="button"
                        className={cn(
                            'flex h-fit w-full items-center justify-center py-1 font-semibold text-ly-white hover:bg-ly-orange-500',
                            {
                                'bg-ly-orange-400': activeButton === type,
                                'bg-ly-brown': activeButton !== type,
                                'rounded-l-full': type === 'dev',
                                'rounded-r-full': type === 'enterprise',
                            }
                        )}
                        onClick={() =>
                            setActiveButton(type as 'dev' | 'enterprise')
                        }
                    >
                        {type === 'dev' ? 'Dev Junior' : 'Empresa'}
                    </Button>
                ))}
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1 leading-none">
                <h3 className="font-sans text-xl font-bold text-ly-dark-azure-600 lg:text-2xl">
                    Entre em contato
                </h3>
                <p className="text-start font-sans text-sm leading-tight text-ly-dark-azure-700/50">
                    {isDev
                        ? 'Queremos ajudar na sua jornada!'
                        : 'Transformamos ideias em soluções!'}
                </p>
            </div>

            <Form
                action={formAction}
                className="flex w-full flex-col gap-6 text-ly-dark-azure-600"
            >
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
                            className="w-full rounded-full bg-input p-5 text-sm !placeholder-gray-400 lg:text-base"
                            placeholder={field === 'email' ? 'E-mail' : 'Nome'}
                            required
                        />
                    </div>
                ))}

                <div className="flex w-full flex-col justify-center">
                    <label htmlFor="message"></label>
                    <Textarea
                        id="message"
                        name="message"
                        placeholder={getMessagePlaceholder()}
                        className="h-28 w-full resize-none rounded-2xl bg-input p-3 text-sm text-foreground !placeholder-gray-400 lg:text-base"
                        required
                    />
                </div>

                <p className="text-center font-sans text-sm text-ly-dark-azure-600">
                    {getFeedbackMessage()}
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
                        variant={pending ? 'outline' : 'default'}
                    >
                        {pending && <LoaderCircle className="animate-spin" />}
                        Enviar mensagem
                    </Button>
                </div>
            </Form>
        </div>
    )
}
