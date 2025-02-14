import { Metadata } from 'next'

import { ContactForm } from '@/components/contact-form'
import { IconEnterprise } from '../../components/svg/icon-enterprise'
import { IconTalents } from '../../components/svg/icon-talents'
import { sendEmail } from '../actions/send-email'

export const metadata: Metadata = {
    title: 'Contatos',
}
export default function ContactsPage() {
    return (
        <section className="bg-contact-small lg:bg-contact-large flex flex-col justify-center overflow-clip lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-4 lg:gap-x-20">
            <section className="mx-auto w-full max-w-md gap-5 px-6 pt-14 font-sans lg:pl-7">
                <div className="text-center lg:text-left">
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

                <div className="lg:itens-start mb-6 flex w-full flex-col items-center gap-3 text-center lg:flex-row-reverse lg:text-left">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-center gap-2 lg:justify-start">
                            <IconEnterprise />
                            <strong className="text-center text-2xl text-ly-dark-azure-600">
                                Empresa
                            </strong>
                        </div>
                        <p className="text-ly-dark-azure-600">
                            The effect of different scenarios on the display
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-center gap-2 lg:justify-start">
                            <IconTalents />
                            <strong className="text-2xl text-ly-dark-azure-600">
                                Talentos
                            </strong>
                        </div>
                        <p className="text-ly-dark-azure-600">
                            The effect of different scenarios on the display
                        </p>
                    </div>
                </div>
            </section>

            <div className="flex justify-center pt-[180px] align-middle lg:col-start-2 lg:row-start-1 lg:row-end-3 lg:justify-end lg:py-[71px] lg:pr-20">
                <ContactForm sendEmailAction={sendEmail} />
            </div>

            <section className="mx-auto flex w-full flex-col items-center gap-3 pb-10 pt-20 lg:pt-0">
                <div className="flex flex-col gap-4 text-center lg:flex-row lg:items-start lg:justify-between lg:gap-32 lg:pl-28 lg:pt-24 lg:text-left">
                    <div className="flex flex-col gap-2 lg:pt-8 lg:align-baseline">
                        <h2 className="text-lg font-semibold text-ly-white lg:text-xl lg:font-bold">
                            Endereço
                        </h2>
                        <p className="text-base text-ly-white lg:text-lg">
                            58 Middle Point Rd <br /> San Francisco, 94124
                        </p>
                    </div>

                    <div className="mb-4 flex flex-col gap-2">
                        <h2 className="text-lg font-bold text-ly-white lg:text-xl">
                            Contatos
                        </h2>
                        <p className="text-base text-ly-white lg:text-lg">
                            (12) 3456-7890
                        </p>
                        <p className="text-base text-ly-white lg:text-lg">
                            contato@email.com
                        </p>
                    </div>
                </div>
            </section>
            <div className="flex-1" />
        </section>
    )
}
