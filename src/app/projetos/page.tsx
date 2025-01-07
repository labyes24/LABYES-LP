import { Metadata } from 'next'

import BottomRight from '@/assets/projects_bottom_mobo.svg'
import TopLeft from '@/assets/projects_top_mobo.svg'

export const metadata: Metadata = {
    title: 'Projetos',
}
export default function ProjectsPage() {
    return (
        <section className="relative flex min-h-[80vh] flex-col items-center overflow-hidden pt-16 text-ly-dark-azure-600">
            <img src={TopLeft.src} className="absolute left-0 top-0 -z-10" />
            <img
                src={BottomRight.src}
                className="absolute bottom-0 right-0 -z-10"
            />

            <h2 className="text-3xl font-bold">Projetos</h2>
            <p className="mt-4 px-4 text-center leading-7">
                Lorem ipsum dolor sit amet consectetur adipiscing elit semper
                dalar elementum tempus hac tellus libero accumsan.
            </p>
        </section>
    )
}
