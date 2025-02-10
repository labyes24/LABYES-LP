import { Metadata } from 'next'

import BottomRight from '@/assets/projects_bottom_mobo.svg'
import TopLeft from '@/assets/projects_top_mobo.svg'
import { ProjectCard } from '@/components/project-card'

export const metadata: Metadata = {
    title: 'Projetos',
}

export default function ProjectsPage() {
    return (
        <section
            style={{
                backgroundImage: `url(${TopLeft.src}), url(${BottomRight.src})`,
                backgroundRepeat: 'no-repeat, no-repeat',
                backgroundPosition: 'top left, bottom right',
            }}
            className="flex min-h-[80vh] flex-col items-center pt-16 font-['DM_Sans'] text-ly-dark-azure-600"
        >
            <h2 className="text-3xl font-bold lg:text-4xl/[46px]">Projetos</h2>

            <p className="mb-9 mt-4 px-4 text-center leading-7 lg:mb-14 lg:max-w-[620px] lg:p-0 lg:text-lg/[30px]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit semper
                dalar elementum tempus hac tellus libero accumsan.
            </p>

            <div className="mb-24 flex flex-col items-center font-['DM_Sans'] text-ly-dark-azure-600 lg:mb-32 lg:flex-row lg:gap-7">
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
        </section>
    )
}
