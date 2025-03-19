import { ConnectionsFoundersCarousel } from './connections-founders-carousel'
import { DoodleUnderline } from './svg/doodle-underline'

export function ConnectionsFounders() {
    return (
        <section className="relative bg-section-dark text-section-dark-foreground before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[37rem] before:bg-section-medium before:content-['']">
            <div className="flex w-full flex-col items-center gap-2 px-5 pb-0 pt-16 text-center lg:items-start lg:gap-4 lg:px-32 lg:pt-24 lg:text-start">
                <h2 className="flex flex-col pb-2.5 text-center text-3xl font-bold lg:pb-4">
                    Idealizadores
                    <DoodleUnderline color="default" size="thin" />
                </h2>

                <p className="text-pretty text-sm leading-7 tracking-widest lg:w-2/4 lg:text-base">
                    Os idealizadores do Lab Yes! uniram experiência e visão para
                    criar um espaço de aprendizado contínuo e inclusão
                    profissional.
                </p>
            </div>

            <ConnectionsFoundersCarousel />
        </section>
    )
}
