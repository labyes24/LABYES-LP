import MissionImage from '@/assets/mission-manifest.svg'
import ValuesImage from '@/assets/values-manifest.svg'
import VisionImage from '@/assets/vision-manifest.svg'
import { AboutManifestItem } from '@/components/about-manifest-item'

export function AboutManifest() {
    return (
        <section className="flex w-full flex-col items-center justify-center gap-9 bg-section-light px-6 py-[60px] text-section-light-foreground lg:gap-14 lg:py-48">
            <div className="mx-auto flex max-w-3xl flex-col items-center justify-center text-center">
                <strong className="mb-4 flex flex-col text-pretty font-sans text-[18px]/[20px] font-bold uppercase tracking-widest lg:text-[20px]/[22px]">
                    A Ponte para o Futuro
                </strong>
                <h2 className="mb-4 text-pretty font-sans text-[28px]/[38px] font-bold lg:text-[36px]/[46px]">
                    Manifesto Lab Yes!
                </h2>

                <p className="text-pretty font-sans text-base/[28px] font-normal lg:text-lg">
                    No Lab Yes! nossa missão é conectar o talento em evolução
                    com o vasto e dinâmico mercado de tecnologia. Acreditamos
                    que não existe idade ou experiência limitante quando se
                    trata de aprender, crescer e transformar o mundo por meio da
                    tecnologia. Se você tem o desejo de fazer a diferença, nós
                    estamos aqui para ser a sua ponte.
                </p>
            </div>
            <div className="mx-auto flex max-w-[430px] flex-col items-center justify-center gap-9 text-center lg:max-w-none lg:flex-row lg:gap-16">
                <AboutManifestItem
                    title="Missão"
                    description="Desenvolver habilidades sociais e técnicas por meio do voluntariado, criando soluções inovadoras que geram impacto positivo na sociedade."
                    image={MissionImage}
                />
                <AboutManifestItem
                    title="Visão"
                    description="Ser referência em programas de voluntariado, formando líderes com habilidades técnicas e sociais para transformar a comunidade."
                    image={VisionImage}
                />
                <AboutManifestItem
                    title="Valores"
                    description="Valorizamos a dedicação dos voluntários e seu impacto positivo na sociedade. Incentivamos o desenvolvimento de habilidades interpessoais"
                    image={ValuesImage}
                />
            </div>
        </section>
    )
}
