import { Metadata } from 'next'

import labLinkIcon from '@/assets/lablinks-icon.svg'
import labYesIcon from '@/assets/labyes-icon.svg'
import bottomDoodle from '@/assets/projects_bottom_mobo.svg'
import topDoodle from '@/assets/projects_top_mobo.svg'
import rkIcon from '@/assets/rk-icon.svg'
import { ProjectCard } from '@/components/project-card'

export const metadata: Metadata = {
    title: 'Projetos',
}

const projects = [
    {
        title: 'RK Imóveis',
        description:
            'Landing pages voltadas para o perfil do corretor, com design e funcionalidade pensados para facilitar a interação com o cliente, destacando as ofertas imobiliárias e serviços.',
        finished: true,
        image: rkIcon,
        link: 'https://rklp-caio-felipe.netlify.app/',
        buttonTitle: 'Visite o site',
    },
    {
        title: 'Lab Links',
        description:
            'Projeto que visa destacar os voluntários que atuaram no Lab Yes!, evidenciando a importância do trabalho colaborativo e a contribuição de cada um no sucesso das iniciativas.',
        finished: true,
        image: labLinkIcon,
        link: 'https://lab-links.netlify.app/',
        buttonTitle: 'Visite o site',
    },
    {
        title: 'Site Lab Yes!',
        description:
            'Site desenvolvido pelo próprio time do Lab Yes! que serve como plataforma para divulgação de seus projetos e iniciativas, visando destacar o trabalho do Lab Yes! e captar novas parcerias.',
        finished: true,
        image: labYesIcon,
        link: 'https://github.com/labyes24/LABYES-LP',
        buttonTitle: 'Veja a documentação',
    },
]

export default function ProjectsPage() {
    return (
        <section className="relative flex min-h-[80vh] flex-col items-center bg-section-medium p-4 pt-16 font-['DM_Sans'] text-section-medium-foreground lg:p-0">
            <div
                style={{
                    backgroundImage: `url(${topDoodle.src})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top left',
                    backgroundSize: 'cover',
                }}
                className="absolute left-[2px] top-[1px] h-[112px] w-[70px] lg:left-[2px] lg:top-[1px] lg:h-[224px] lg:w-[140px]"
            />

            <h2 className="mt-10 text-3xl font-bold lg:text-4xl/[46px]">
                Produtos
            </h2>

            <p className="mb-9 mt-4 px-4 text-center leading-7 lg:mb-14 lg:max-w-[620px] lg:p-0 lg:text-lg/[30px]">
                Desenvolvemos soluções personalizadas focadas nas necessidades
                reais de nossos clientes. O Time <span className='font-bold'>Lab Yes!</span> cria produtos
                inovadores e sob medida, transformando desafios em
                oportunidades.
            </p>

            <div className="mb-28 flex flex-col items-center font-['DM_Sans'] lg:mb-48 lg:flex-row lg:gap-7 lg:p-7">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        finished={project.finished}
                        buttonTitle={project.buttonTitle}
                        link={project.link}
                        image={project.image}
                    />
                ))}
            </div>
            <div
                style={{
                    backgroundImage: `url(${bottomDoodle.src})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom right',
                    backgroundSize: 'cover',
                }}
                className="absolute bottom-0 right-0 h-[83px] w-[80px] lg:bottom-0 lg:right-0 lg:h-[195px] lg:w-[190px]"
            />
        </section>
    )
}
