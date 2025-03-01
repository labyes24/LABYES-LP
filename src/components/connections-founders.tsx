import { ConnectionsFoundersCarousel } from './connections-founders-carousel'
import { DoodleUnderline } from './svg/doodle-underline'

export function ConnectionsFounders() {
    return (
        <section className="relative -z-10 bg-section-medium">
            <div className="absolute left-0 top-0 -z-10 h-[28rem] w-full bg-section-dark" />

            <div className="flex w-full flex-col items-center gap-2 px-5 pb-0 pt-16 text-center text-section-dark-foreground lg:items-start lg:gap-4 lg:px-32 lg:pt-24 lg:text-start">
                <h2 className="flex flex-col pb-2.5 text-center text-3xl font-bold lg:pb-4">
                    Fundadores
                    <DoodleUnderline color="default" size="thin" />
                </h2>
                <p className="text-pretty text-sm leading-7 tracking-widest lg:w-2/4 lg:text-base">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    semper dalar elementum tempus hac tellus libero accumsan.
                </p>
            </div>

            <ConnectionsFoundersCarousel />
        </section>
    )
}
