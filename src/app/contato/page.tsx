import { Metadata } from 'next'

import BgImg from '@/assets/contact-bg-img.png'
import Wave from '@/assets/contact-wave.svg'
import { ContactForm } from '@/components/contact-form'
import { IconEnterprise } from '../../components/svg/icon-enterprise'
import { IconTalents } from '../../components/svg/icon-talents'
export const metadata: Metadata = {
    title: 'Contatos',
}
export default function ContactsPage() {
    return (
        <div
            className="h-full"
            style={{
                backgroundImage: `url(${Wave.src}),url(${BgImg.src}) `,
                backgroundRepeat: 'no-repeat, no-repeat',
                backgroundPosition: 'bottom 0px left -32px, top 420px left 0px',
            }}
        >
            <section className="mx-auto mb-56 w-full max-w-md font-sans">
                <div className="mx-4 my-6 text-center">
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
                <div className="mb-6 flex w-full flex-col items-center gap-3">
                    <div className="flex items-center justify-center gap-2">
                        <IconEnterprise />
                        <strong className="text-center text-2xl text-ly-dark-azure-600">
                            Empresa
                        </strong>
                    </div>
                    <p className="text-ly-dark-azure-600">
                        The effect of different scenarios on the display
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <IconTalents />
                        <strong className="text-center text-2xl text-ly-dark-azure-600">
                            Talentos
                        </strong>
                    </div>
                    <p className="text-ly-dark-azure-600">
                        The effect of different scenarios on the display
                    </p>
                </div>
            </section>

            <ContactForm />

            <section className="mx-auto flex w-full max-w-md flex-col items-center gap-3">
                <div className="flex flex-col gap-2 text-center">
                    <h2 className="text-center text-lg font-semibold text-ly-white lg:text-xl lg:font-bold">
                        Endereço
                    </h2>
                    <p className="text-center text-base text-ly-white lg:text-lg">
                        58 Middle Point Rd <br /> San Francisco, 94124
                    </p>
                </div>
                <div className="mb-4 flex flex-col gap-2 text-center">
                    <h2 className="text-center text-lg font-bold text-ly-white lg:text-xl">
                        Contatos
                    </h2>
                    <p className="text-center text-base text-ly-white lg:text-lg">
                        (12) 3456-7890
                    </p>
                    <p className="text-center text-base text-ly-white lg:text-lg">
                        contato@email.com
                    </p>
                </div>
            </section>
        </div>
    )
}
