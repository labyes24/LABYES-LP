'use client'

import Form from 'next/form'
import { useState } from 'react'
import { Button } from './ui/button'

export function ContactForm() {
    const [activeButton, setActiveButton] = useState<string | null>('empresa')

    return (
        <Form
            action="/"
            className="mb-12 flex w-3/4 max-w-md flex-col items-center justify-center rounded-md bg-ly-white p-8"
        >
            <div className="mb-5 flex w-full flex-row items-center gap-2">
                <Button
                    type="button"
                    className={`w-full rounded-l-full ${
                        activeButton === 'empresa'
                            ? 'bg-ly-brown'
                            : 'bg-ly-orange-400'
                    } p-4 text-base font-bold text-ly-white hover:bg-ly-orange-500`}
                    onClick={() => setActiveButton('empresa')}
                    size={'sm'}
                >
                    Empresa
                </Button>
                <Button
                    type="button"
                    className={`w-full rounded-l-full ${
                        activeButton === 'dev'
                            ? 'bg-ly-brown'
                            : 'bg-ly-orange-400'
                    } p-4 text-base font-bold text-ly-white hover:bg-ly-orange-500`}
                    onClick={() => setActiveButton('dev')}
                    size={'sm'}
                >
                    Dev junior
                </Button>
            </div>
            <h3 className="mb-2 text-start font-sans text-2xl font-bold text-ly-dark-azure-600">
                Entre em contato
            </h3>
            <p className="mb-8 text-start font-sans text-base text-ly-dark-azure-600">
                Queremos ouvir você
            </p>

            <div className="mb-6 flex w-full flex-col justify-center">
                <label htmlFor="name"></label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded-full bg-input px-3 py-4 text-start text-base text-ly-gray-50 focus:outline-none focus:ring focus:ring-ly-orange-500"
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
                    className="w-full rounded-full bg-input px-3 py-4 text-start text-base text-ly-gray-50 focus:outline-none focus:ring focus:ring-ly-orange-500"
                    placeholder="E-mail"
                    required
                />
            </div>
            <div className="mb-8 flex w-full flex-col justify-center">
                <label htmlFor="message"></label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Digite sua mensagem"
                    className="w-full resize-none appearance-none rounded-2xl border border-none border-gray-300 bg-input px-3 py-4 text-start text-base text-ly-gray-50 outline-none focus:ring-2 focus:ring-ly-orange-500"
                    required
                ></textarea>
            </div>
            <button
                type="submit"
                className="w-full rounded-full bg-ly-orange-400 p-4 text-base font-bold text-ly-white hover:bg-ly-orange-500"
            >
                Enviar mensagem
            </button>
        </Form>
    )
}
