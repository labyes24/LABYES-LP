import { ConnectionsFoundersCarousel } from './connections-founders-carousel'
import { DoodleUnderline } from './svg/doodle-underline'

export function ConnectionsFounders() {
    return (
        <section className="relative h-[1130px] lg:h-[1086px]">
            <div className="absolute z-0 flex w-full flex-col items-center gap-2 bg-ly-dark-azure-700 px-20 pb-40 pt-24 text-center text-ly-white lg:items-start lg:gap-4 lg:text-start">
                <h2 className="flex flex-col pb-2.5 text-center text-3xl font-bold lg:pb-4">
                    Fundadores
                    <DoodleUnderline color="default" size="thin" />
                </h2>
                <p className="text-pretty leading-7 tracking-widest lg:w-2/4">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    semper dalar elementum tempus hac tellus libero accumsan.
                </p>
            </div>
            <div className="absolute top-48 z-10">
                <ConnectionsFoundersCarousel />
            </div>
        </section>
    )
}
