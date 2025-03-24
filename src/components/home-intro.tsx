import { DoodleHeartArrow } from './svg/doodle-heart-arrow'
import { DoodleLight } from './svg/doodle-light'
import { Separator } from './ui/separator'

export function HomeIntro() {
    return (
        <section className="relative flex flex-col gap-10 bg-section-light px-6 py-10 pt-20 text-section-light-foreground lg:pt-14">
            <DoodleHeartArrow className="absolute left-8 top-5 h-16 w-16 lg:left-[77px] lg:top-[19px] lg:h-28 lg:w-28" />

            <div className="mx-auto flex max-w-[720px] flex-col gap-4 text-center text-ly-dark-azure-600 lg:gap-6">
                <h2 className="mt-4 text-2xl font-bold lg:text-3xl">
                    A dificuldade da primeira vaga tech
                </h2>
                <p className="text-lg font-light leading-loose lg:leading-loose lg:tracking-widest">
                    &quot;Muitas vagas em tecnologia, em áreas como
                    desenvolvimento web, data science, design UI/UX, engenharia
                    de software, gestão de projetos, entre outras, costumam
                    exigir experiência prática que muitos talentos ainda não
                    possuem. Isso gera frustração, já que as empresas
                    frequentemente pedem de 1 a 2 anos de experiência. Mas como
                    um talento iniciante pode atender a essa demanda sem ter uma
                    oportunidade para começar sua jornada no mercado?&quot;
                </p>
            </div>

            <div className="flex flex-col">
                <Separator decorative />
                <span className="mx-auto w-44 border-b-2 border-ly-dark-azure-600 lg:w-96" />
            </div>

            <DoodleLight className="absolute bottom-4 right-3 h-20 w-20 lg:h-36 lg:w-36" />
        </section>
    )
}
