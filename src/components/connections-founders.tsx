import { ConnectionsFoundersCarousel } from './connections-founders-carousel'
import { DoodleUnderline } from './svg/doodle-underline'

export function ConnectionsFounders() {
    return (
        <section className="relative h-[1086px]">
            <div className="absolute z-0 flex w-full flex-col items-start gap-4 bg-ly-dark-azure-700 px-20 pb-40 pt-24 text-start text-ly-white">
                <h2 className="flex flex-col pb-4 text-center text-2xl font-bold lg:text-3xl">
                    Fundadores
                    <DoodleUnderline color="default" size="thin" />
                </h2>
                <p className="w-2/4 text-pretty leading-7 tracking-widest">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    semper dalar elementum tempus hac tellus libero accumsan.{' '}
                </p>
            </div>
            <div className="absolute top-48 z-10">
                <ConnectionsFoundersCarousel />
            </div>
        </section>
    )
}
