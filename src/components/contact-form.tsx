'use client'
import { sendEmail } from '@/app/actions/send-email'
import { cn } from '@/lib/utils'
import { AlertTriangle, LoaderCircle, Send } from 'lucide-react'
import Form from 'next/form'
import { useActionState, useState } from 'react'
import { Button } from './ui/button'
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

    console.log(formState)

    return (
        <div className="mb-12 flex w-3/4 max-w-md flex-col items-center justify-center rounded-2xl bg-ly-white p-8">
            <div className="mb-5 flex w-full flex-row items-center gap-2">
                <Button
                    type="button"
                    className={`w-full rounded-l-full ${
                        activeButton === 'dev'
                            ? 'bg-ly-orange-400'
                            : 'bg-ly-brown'
                    } p-4 text-base font-bold text-ly-white hover:bg-ly-orange-500`}
                    onClick={() => setActiveButton('dev')}
                    size={'sm'}
                >
                    Dev Junior
                </Button>
                <Button
                    type="button"
                    className={`w-full rounded-r-full ${
                        activeButton === 'enterprise'
                            ? 'bg-ly-orange-400'
                            : 'bg-ly-brown'
                    } p-4 text-base font-bold text-ly-white hover:bg-ly-orange-500`}
                    onClick={() => setActiveButton('enterprise')}
                    size={'sm'}
                >
                    Empresa
                </Button>
            </div>
            <h3 className="mb-2 text-start font-sans text-2xl font-bold text-ly-dark-azure-600">
                Entre em contato
            </h3>
            <p className="mb-8 text-start font-sans text-ly-dark-azure-600">
                {activeButton === 'dev' ? (
                    <>Queremos ajudar na sua jornada!</>
                ) : (
                    <>Vamos transformar ideias em soluções!</>
                )}
            </p>
            <Form action={formAction} className="w-full text-ly-dark-azure-600">
                <div className="mb-6 flex w-full flex-col justify-center">
                    <label htmlFor="name"></label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full rounded-full bg-input px-3 py-4 text-start text-base focus:outline-none focus:ring focus:ring-ly-orange-500"
                        placeholder="Nome"
                        required
                    />
                </div>
                <div className="mb-6 flex w-full flex-col justify-center">
                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full rounded-full bg-input px-3 py-4 text-start text-base focus:outline-none focus:ring focus:ring-ly-orange-500"
                        placeholder="E-mail"
                        required
                    />
                </div>
                <div className="mb-4 flex w-full flex-col justify-center">
                    <label htmlFor="message"></label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder={
                            activeButton === 'dev'
                                ? 'Conte-nos sobre sua experiência ou dúvidas'
                                : 'Descreva o que você precisa'
                        }
                        className="w-full resize-none appearance-none rounded-2xl border border-none border-gray-300 bg-input px-3 py-4 text-start text-base outline-none focus:ring-2 focus:ring-ly-orange-500"
                        required
                    ></textarea>
                </div>
                <p
                    className={cn(
                        'mb-4 text-center font-sans text-sm text-ly-dark-azure-600',
                        formState.success
                            ? 'text-ly-green-400'
                            : formState.error
                              ? 'text-ly-red'
                              : 'text-ly-dark-azure-600'
                    )}
                >
                    {formState.success ? (
                        <span className="flex items-center justify-center gap-2">
                            <Send className="size-3.5" /> Sua mensagem foi
                            enviada com sucesso!
                        </span>
                    ) : formState.error ? (
                        <span className="flex items-center justify-center gap-2">
                            <AlertTriangle className="size-3.5" /> Ocorreu um
                            erro ao enviar sua mensagem.
                        </span>
                    ) : activeButton === 'dev' ? (
                        <span className="flex items-center justify-center gap-2">
                            Estamos aqui para te apoiar no início da sua
                            carreira!
                        </span>
                    ) : (
                        <span className="flex items-center justify-center gap-2">
                            Estamos prontos para ajudar sua empresa a inovar e
                            crescer!
                        </span>
                    )}
                </p>
                <div className={cn(pending && 'cursor-not-allowed')}>
                    <Button
                        type="submit"
                        disabled={pending}
                        className={cn(
                            'w-full rounded-full p-7 text-lg font-bold',
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
