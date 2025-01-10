import { Metadata } from 'next'
import Form from 'next/form'
import { IconEmpresa } from '../../components/svg/icon-empresa'
import { IconTalentos } from '../../components/svg/icon-talentos'
import { Button } from '../../components/ui/button'

// import Wave from '@/assets/contact-wave.svg'
export const metadata: Metadata = {
    title: 'Contatos',
}
export default function ContactsPage() {
    return (
        <div className="mt-3 flex w-full flex-col items-center p-4">
            <section className="w-full max-w-md items-center font-sans">
                <div className="mb-6 text-center">
                    <h2 className="mb-3 text-2xl font-bold text-ly-dark-azure-600">
                        Título da Sessão
                    </h2>
                    <p className="mb-6 text-ly-dark-azure-600">
                        By creating a visual guide along the way, the designer
                        or developer can get input from the other people
                        involved in the website such as the customer, their
                        manager.
                    </p>
                </div>
                <div className="mb-8 flex w-full flex-col items-center gap-3">
                    <div className="flex items-center justify-center gap-2">
                        <IconEmpresa />
                        <strong className="text-center text-2xl">
                            Empresa
                        </strong>
                    </div>
                    <p className="text-ly-dark-azure-600">
                        The effect of different scenarios on the display
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <IconTalentos />
                        <strong className="text-center text-2xl">
                            Talentos
                        </strong>
                    </div>
                    <p className="text-ly-dark-azure-600">
                        The effect of different scenarios on the display
                    </p>
                </div>
            </section>

            <Form
                action="/"
                className="mb-12 flex w-full flex-col justify-center rounded-md bg-ly-gray-100 p-8"
            >
                <div className="mb-5 flex w-full flex-row items-center gap-2">
                    <Button
                        type="button"
                        className="w-full rounded-l-full bg-ly-brown p-4 text-base font-bold text-ly-white hover:bg-ly-orange-500"
                        size={'sm'}
                    >
                        Empresa
                    </Button>
                    <Button
                        type="button"
                        className="w-full rounded-r-full bg-ly-orange-400 text-base font-bold text-ly-white hover:bg-ly-orange-500"
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

            <section className="mb-12 flex w-full flex-col items-center gap-3">
                <div className="flex flex-col gap-2 text-start">
                    <h2 className="text-center text-xl font-bold text-ly-dark-azure-600">
                        Endereço
                    </h2>
                    <p className="text-start text-lg text-ly-dark-azure-600">
                        58 Middle Point Rd <br /> San Francisco, 94124
                    </p>
                </div>
                <div className="flex flex-col gap-2 text-start">
                    <h2 className="text-center text-xl font-bold text-ly-dark-azure-600">
                        Contatos
                    </h2>
                    <p className="text-start text-lg text-ly-dark-azure-600">
                        (12) 3456-7890
                    </p>
                    <p className="text-start text-lg text-ly-dark-azure-600">
                        contato@email.com
                    </p>
                </div>
            </section>
        </div>
    )
}
