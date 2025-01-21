'use client'
import Form from 'next/form'
import { useState } from 'react'
import { Button } from './ui/button'

export function ContactForm() {
    const [activeButton, setActiveButton] = useState<'dev' | 'enterprise'>(
        'dev'
    )

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
            <Form action="/" className="w-full text-ly-dark-azure-600">
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
                <p className="mb-4 text-center font-sans text-sm text-ly-dark-azure-600">
                    {activeButton === 'dev' ? (
                        <>
                            Estamos aqui para te apoiar no início da sua
                            carreira!
                        </>
                    ) : (
                        <>
                            Estamos prontos para ajudar sua empresa a inovar e
                            crescer!
                        </>
                    )}
                </p>
                <button
                    type="submit"
                    className="w-full rounded-full bg-ly-orange-400 p-4 text-base font-bold text-ly-white hover:bg-ly-orange-500"
                >
                    Enviar mensagem
                </button>
            </Form>
        </div>
    )
}
