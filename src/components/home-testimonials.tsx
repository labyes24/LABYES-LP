import { DoodleUnderline } from './svg/doodle-underline'
import { TestimonialCard } from './testimonial-card'

export function HomeTestimonials() {
    return (
        <section className="flex w-full flex-col gap-6 border-4 border-ly-red lg:px-24 lg:py-11">
            <div className="mx-auto max-w-[630px] text-center">
                <h2 className="flex flex-col pb-4 text-2xl font-bold lg:text-3xl">
                    Depoimentos
                    <DoodleUnderline color="default" size="thin" />
                </h2>
                <p className="text-pretty leading-7 tracking-widest">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    semper dalar elementum tempus hac tellus libero accumsan.{' '}
                </p>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row">
                <TestimonialCard
                    quote=""
                    description=""
                    author=""
                    role=""
                    company=""
                />
                <TestimonialCard
                    quote=""
                    description=""
                    author=""
                    role=""
                    company=""
                />
                <TestimonialCard
                    quote=""
                    description=""
                    author=""
                    role=""
                    company=""
                />
            </div>
        </section>
    )
}
