import { Metadata } from 'next'
import Image from 'next/image'

import InfoIcon from '@/assets/info-icon.svg'
import { ContactForm } from '@/components/contact-form'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { IconEnterprise } from '../../components/svg/icon-enterprise'
import { IconTalents } from '../../components/svg/icon-talents'
import { sendEmail } from '../actions/send-email'

export const metadata: Metadata = {
    title: 'Contatos',
}
export default function ContactsPage() {
    return (
        <section className="bg-contact-small lg:bg-contact-large flex flex-col justify-center overflow-clip bg-section-light lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-4 lg:gap-x-20">
            <section className="mx-auto w-full max-w-md gap-5 px-6 pt-14 font-sans text-section-light-foreground lg:pl-7">
                <div className="text-center lg:text-left">
                    <h2 className="mb-3 text-3xl font-bold">
                        #boraláserfeliz!
                    </h2>
                    <p className="mb-6">
                        O Lab Yes! conecta novos desenvolvedores com o mercado
                        real, oferecendo benefícios tanto para os novos
                        desenvolvedores quanto para as empresas que buscam
                        estabelecer parcerias. Aqui estão algumas das vantagens:
                    </p>
                </div>

                <div className="lg:itens-start mb-6 flex w-full flex-col items-center gap-3 text-center lg:flex-row lg:text-left">
                    <div className="flex flex-col gap-3 lg:w-1/2">
                        <div className="flex items-center justify-center gap-2 lg:justify-start">
                            <IconTalents />
                            <strong className="text-2xl">Talentos</strong>

                            <Dialog>
                                <DialogTrigger className="rounded-full focus:outline-ring">
                                    <Image
                                        src={InfoIcon.src}
                                        alt="Informações para talentos"
                                        width={'15'}
                                        height={'15'}
                                        unoptimized
                                    />
                                </DialogTrigger>

                                <DialogContent className="bg-card font-sans text-card-foreground">
                                    <DialogHeader className="flex flex-row items-baseline gap-2 space-y-0">
                                        <IconTalents />
                                        <DialogTitle className="text-4xl">
                                            Talentos
                                        </DialogTitle>
                                    </DialogHeader>

                                    <div className="flex flex-col gap-3">
                                        <p>
                                            Benefícios para os novos
                                            desenvolvedores:
                                        </p>
                                        <ol className="ml-4 list-decimal space-y-2 text-section-light-foreground marker:text-primary">
                                            <li>
                                                <span className="text-primary">
                                                    Experiência prática: &nbsp;
                                                </span>
                                                Os desenvolvedores têm a
                                                oportunidade de trabalhar em
                                                projetos reais, como a criação
                                                de landing pages e sites, o que
                                                permite aplicar os conhecimentos
                                                adquiridos e se preparar para o
                                                mercado de trabalho.
                                            </li>
                                            <li>
                                                <span className="text-primary">
                                                    Acompanhamento e mentoria:
                                                    &nbsp;
                                                </span>
                                                Durante os projetos, os
                                                participantes recebem orientação
                                                de profissionais experientes, o
                                                que os ajuda a aprimorar suas
                                                habilidades técnicas e entender
                                                as melhores práticas do setor.
                                            </li>
                                            <li>
                                                <span className="text-primary">
                                                    Construção de portfólio:
                                                    &nbsp;
                                                </span>
                                                Ao participar de projetos reais,
                                                os desenvolvedores podem criar
                                                um portfólio sólido, que será
                                                valioso ao buscar oportunidades
                                                no mercado.
                                            </li>
                                            <li>
                                                <span className="text-primary">
                                                    Networking: &nbsp;
                                                </span>
                                                O contato com outros
                                                profissionais do mercado, como
                                                mentores e colaboradores de
                                                empresas parceiras, amplia a
                                                rede de contatos dos
                                                participantes, o que pode abrir
                                                portas para futuras
                                                oportunidades de emprego.
                                            </li>
                                        </ol>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                        <p>Construa experiências reais de mercado.</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-center gap-2 lg:justify-start">
                            <IconEnterprise />
                            <strong className="text-center text-2xl">
                                Empresa
                            </strong>

                            <Dialog>
                                <DialogTrigger className="rounded-full focus:outline-ring">
                                    <Image
                                        src={InfoIcon.src}
                                        alt="Informações para talentos"
                                        width={'15'}
                                        height={'15'}
                                        unoptimized
                                    />
                                </DialogTrigger>

                                <DialogContent className="bg-card font-sans text-card-foreground">
                                    <DialogHeader className="flex flex-row items-baseline gap-2 space-y-0">
                                        <IconEnterprise />
                                        <DialogTitle className="mt-0 text-4xl">
                                            Empresa
                                        </DialogTitle>
                                    </DialogHeader>

                                    <div className="flex flex-col gap-3">
                                        <p>Benefícios para as empresas:</p>
                                        <ol className="ml-4 list-decimal space-y-2 text-section-light-foreground marker:text-primary">
                                            <li>
                                                <span className="text-primary">
                                                    Acesso a talentos
                                                    emergentes: &nbsp;
                                                </span>
                                                As empresas podem contar com
                                                novos desenvolvedores altamente
                                                motivados e com habilidades
                                                atualizadas, sendo uma excelente
                                                oportunidade para identificar
                                                futuros colaboradores.
                                            </li>
                                            <li>
                                                <span className="text-primary">
                                                    Projetos com custo reduzido:
                                                    &nbsp;
                                                </span>
                                                A parceria com o Lab Yes!
                                                permite que as empresas tenham
                                                acesso a projetos de qualidade a
                                                um custo mais acessível, uma vez
                                                que os desenvolvedores estão em
                                                fase de aprendizado, mas já têm
                                                potencial para entregar
                                                resultados sólidos.
                                            </li>
                                            <li>
                                                <span className="text-primary">
                                                    Inovação e novas
                                                    perspectivas: &nbsp;
                                                </span>
                                                Novos talentos trazem novas
                                                ideias e abordagens criativas
                                                para os projetos, o que pode
                                                resultar em soluções inovadoras
                                                para as empresas.
                                            </li>
                                            <li>
                                                <span className="text-primary">
                                                    Responsabilidade social:
                                                    &nbsp;
                                                </span>
                                                Ao apoiar iniciativas que
                                                capacitam jovens talentos, as
                                                empresas fortalecem sua imagem
                                                de responsabilidade social,
                                                contribuindo para o
                                                desenvolvimento de uma nova
                                                geração de profissionais
                                                qualificados.
                                            </li>
                                        </ol>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                        <p>Impulsione novos talentos!</p>
                    </div>
                </div>
            </section>

            <div className="flex justify-center pt-[180px] align-middle lg:col-start-2 lg:row-start-1 lg:row-end-3 lg:justify-end lg:py-[71px] lg:pr-20">
                <ContactForm sendEmailAction={sendEmail} />
            </div>

            <section className="mx-auto flex w-full flex-col items-center gap-3 pb-10 pt-20 text-section-dark-foreground lg:pt-0">
                <div className="flex flex-col gap-4 text-center lg:flex-row lg:items-start lg:justify-between lg:gap-32 lg:pl-28 lg:pt-24 lg:text-left">
                    <div className="flex flex-col gap-2 lg:pt-8 lg:align-baseline">
                        <h2 className="text-lg font-semibold lg:text-xl lg:font-bold">
                            Endereço
                        </h2>
                        <p className="text-base lg:text-lg">
                            58 Middle Point Rd <br /> San Francisco, 94124
                        </p>
                    </div>

                    <div className="mb-4 flex flex-col gap-2">
                        <h2 className="text-lg font-bold lg:text-xl">
                            Contatos
                        </h2>
                        <p className="text-base lg:text-lg">(12) 3456-7890</p>
                        <p className="text-base lg:text-lg">
                            contato@email.com
                        </p>
                    </div>
                </div>
            </section>
            <div className="flex-1" />
        </section>
    )
}
