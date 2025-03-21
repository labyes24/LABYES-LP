import backgroundImage from '@/assets/background-1.webp'
import cristianImg from '@/assets/cristian-sbardelotto.png'
import franciscoImg from '@/assets/francisco-ylderlan.jpeg'
import henricoImg from '@/assets/henrico-angolera.jpeg'
import Image from 'next/image'
import { DoodleUnderline } from './svg/doodle-underline'
import { TestimonialCard } from './testimonial-card'

const testimonials = [
    {
        quote: '“Da promessa à realidade”',
        description:
            'Desde minha entrada no Lab Yes!, vinha percebendo que tudo o que eu mais precisava pra sair do Network e ir pra vida real e ingressar no mercado de trabalho. A experiência do dia a dia me fez um desenvolvedor muito melhor e mais consciente, e devo muito da minha jornada a todos ensinamentos que obtive durante o nosso tempo juntos.',
        author: 'Cristian Sbardelotto',
        authorLink: 'https://www.linkedin.com/in/cristian-k-sbardelotto/',
        role: 'Desenvolvedor front-end',
        image: cristianImg,
        company: 'HASH³',
        companyLink: 'https://www.linkedin.com/company/hashcubed/',
    },
    {
        quote: '“O Caminho para a minha primeira vaga”',
        description:
            'O Lab Yes! foi fundamental na minha jornada. Muito crescimento e exposição ao aprendizado colaborativo, pude praticar, crescer profissionalmente e conquistar a minha primeira vaga, com muito mais confiança. A dedicação de Grace e Adriano foram essenciais, me proporcionando a base e confiança que eu precisava. Sou eternamente grato!',
        author: 'Francisco Ylderlan',
        authorLink: 'https://www.linkedin.com/in/franciscoylderlanoliveira/',
        role: 'Software Engineer e Full Stack Developer',
        image: franciscoImg,
        company: 'TMJobs',
        companyLink: 'https://tmjobs.com.br/',
    },
    {
        quote: '“Transformação através do aprendizado”',
        description:
            'O Lab Yes! sem dúvidas foi transformador pra mim. Foi muito bom trabalhar em equipe, conhecer pessoas incríveis e aprender mais sobre as etapas do desenvolvimento. Sem dúvidas estar no Lab Yes! me ajudou e muito a entrar no mercado, todo aprendizado de soft skills, git em grupo, lidar com pedidos de cliente, foram fundamentais e os levarei para o resto da vida.',
        author: 'Henrico Angolera',
        authorLink: 'https://www.linkedin.com/in/henrico-angolera/',
        role: 'Desenvolvedor Front-end júnior nível III',
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
                    às vivenciou. Confira os depoimentos dos nossos voluntários
                    e descubra o impacto da experiência do Lab Yes! em suas
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
