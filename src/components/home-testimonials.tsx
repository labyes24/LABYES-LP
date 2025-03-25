import Image from 'next/image'

import backgroundImage from '@/assets/background-1.webp'
import cristianImg from '@/assets/cristian-sbardelotto.png'
import franciscoImg from '@/assets/francisco-ylderlan.jpeg'
import henricoImg from '@/assets/henrico-angolera.jpeg'
import { DoodleUnderline } from './svg/doodle-underline'
import { TestimonialCard } from './testimonial-card'

const testimonials = [
    {
        quote: 'Da promessa à realidade',
        description:
            'Desde minha entrada no Lab Yes!, percebi que era o que eu precisava para deixar o Network e ingressar no mercado de trabalho. A experiência diária me fez um desenvolvedor mais capacitado e consciente.',
        author: 'Cristian Sbardelotto',
        authorLink: 'https://www.linkedin.com/in/cristian-k-sbardelotto/',
        role: 'Desenvolvedor Front-end',
        image: cristianImg,
        company: 'HASH³',
        companyLink: 'https://www.linkedin.com/company/hashcubed/',
    },
    {
        quote: 'O Caminho para a minha primeira vaga',
        description:
            'O Lab Yes! foi essencial para meu crescimento profissional, aprendizado colaborativo e conquista da primeira vaga. A dedicação de Grace e Adriano me deu a base e confiança que eu precisava. Sou grato!',
        author: 'Francisco Ylderlan',
        authorLink: 'https://www.linkedin.com/in/franciscoylderlanoliveira/',
        role: 'Desenvolvedor Full Stack',
        image: franciscoImg,
        company: 'TMJobs',
        companyLink: 'https://tmjobs.com.br/',
    },
    {
        quote: 'Transformação através do aprendizado',
        description:
            'O Lab Yes! foi transformador. Trabalhar em equipe, aprender sobre desenvolvimento, soft skills e versionamento git em grupo me ajudou a entrar no mercado e levar esses ensinamentos para a vida toda.',
        author: 'Henrico Angolera',
        authorLink: 'https://www.linkedin.com/in/henrico-angolera/',
        role: 'Desenvolvedor Front-end',
        image: henricoImg,
        company: 'Gestão DS',
        companyLink: 'https://www.gestaods.com.br/',
    },
]
export function HomeTestimonials() {
    return (
        <section className="relative flex w-full flex-col gap-10 px-7 py-14 lg:px-24 lg:py-28">
            <div className="absolute bottom-0 right-0 -z-10 size-full bg-ly-dark-azure-transparent fill-inherit" />
            <Image
                src={backgroundImage}
                priority={true}
                unoptimized
                alt="Fundo de profissional da programação programando."
                fill={true}
                sizes="100%"
                className="-z-20 rounded-lg object-cover"
            />
            <div className="mx-auto flex max-w-[630px] flex-col items-center justify-center gap-4 text-center text-ly-white">
                <h2 className="flex flex-col pb-4 text-2xl font-bold lg:text-3xl">
                    Depoimentos
                    <DoodleUnderline color="red" size="thin" />
                </h2>
                <p className="text-pretty leading-7 tracking-widest">
                    Acreditamos que as melhores histórias são contadas por quem
                    as vivenciou. Confira os depoimentos dos nossos voluntários
                    e descubra o impacto da experiência do{' '}
                    <span className="font-bold">Lab Yes!</span> em suas
                    jornadas!{' '}
                </p>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        positionCard={index}
                        quote={testimonial.quote}
                        description={testimonial.description}
                        author={testimonial.author}
                        image={testimonial.image}
                        role={testimonial.role}
                        company={testimonial.company}
                        companyLink={testimonial.companyLink}
                        authorLink={testimonial.authorLink}
                    />
                ))}
            </div>
        </section>
    )
}
