import { Metadata } from 'next'

import bottomDoodle from '@/assets/projects_bottom_mobo.svg'
import topDoodle from '@/assets/projects_top_mobo.svg'
import { ProjectCard } from '@/components/project-card'

export const metadata: Metadata = {
    title: 'Projetos',
}

export default function ProjectsPage() {
    return (
        <section className="relative flex min-h-[80vh] flex-col items-center p-4 pt-16 font-['DM_Sans'] text-ly-dark-azure-600 lg:p-0">
            <div
                style={{
                    backgroundImage: `url(${topDoodle.src})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top left',
                    backgroundSize: 'cover',
                }}
                className="absolute left-[2px] top-[1px] h-[112px] w-[70px] lg:left-[2px] lg:top-[1px] lg:h-[224px] lg:w-[140px]"
            />

            <h2 className="text-3xl font-bold lg:text-4xl/[46px]">Projetos</h2>

            <p className="mb-9 mt-4 px-4 text-center leading-7 lg:mb-14 lg:max-w-[620px] lg:p-0 lg:text-lg/[30px]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit semper
                dalar elementum tempus hac tellus libero accumsan.
            </p>

            <div className="mb-28 flex flex-col items-center font-['DM_Sans'] text-ly-dark-azure-600 lg:mb-48 lg:flex-row lg:gap-7">
                <ProjectCard
                    title="Mobile App"
                    description="Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum tempus hac."
                    finished={true}
                    link="/projetos"
                />

                <ProjectCard
                    title="Desktop App"
                    description="Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum tempus hac."
                    finished={false}
                    link="/projetos"
                />

                <ProjectCard
                    title="Multiple Users"
                    description="Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum tempus hac."
                    finished={false}
                    link="/projetos"
                />
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
