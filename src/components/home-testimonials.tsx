import backgroundImage from '@/assets/background-1.webp'
import Image from 'next/image'
import { DoodleUnderline } from './svg/doodle-underline'
import { TestimonialCard } from './testimonial-card'
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
                <TestimonialCard
                    positionCard={0}
                    quote="“Da promessa à realidade”"
                    description="Desde minha entrada no Lab Yes!, vinha percebendo que era a  coisa que eu mais precisava pra sair do Network e ir pra vida real. A experiência do dia a dia me fez um desenvolvedor muito melhor e mais consciente, e devo muito da minha jornada a todos ensinamentos que obtive durante o nosso tempo juntos."
                    author="Cristian Sbardelotto"
                    role="Desenvolvedor front-end"
                    image=""
                    company="HASH³"
                />
                <TestimonialCard
                    positionCard={1}
                    quote="“O Caminho para a minha primeira vaga”"
                    description="O Lab Yes! foi fundamental na minha jornada. Muito crescimento e exposição ao aprendizado colaborativo, pude praticar, crescer profissionalmente e conquistar a minha primeira vaga, com muito mais confiança. A dedicação de Grace e Adriano foram essenciais, me proporcionando a base e confiança que eu precisava. Sou eternamente grato!"
                    author="Francisco Ylderlan"
                    role="Software Engineer e Full Stack Developer"
                    company="TMJobs"
                />
                <TestimonialCard
                    positionCard={2}
                    quote="“Transformação através do aprendizado”"
                    description="O Lab Yes! sem dúvidas foi transformador pra mim. Foi muito bom trabalhar em equipe, conhecer pessoas incríveis e aprender mais sobre as etapas do desenvolvimento. Sem dúvidas estar no Lab Yes! me ajudou e muito a entrar no mercado, todo aprendizado de soft skills, git em grupo, lidar com pedidos de cliente, foram aprendizados fundamentais que levarei para o resto da vida."
                    author="Henrico Angolera"
                    role="Desenvolvedor Front-end júnior nível III"
                    company="Gestão DS"
                />
            </div>
        </section>
    )
}
