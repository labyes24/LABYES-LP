import backgroundImage from '@/assets/home-testimonials-background.webp'
import Image from 'next/image'
import { DoodleUnderline } from './svg/doodle-underline'
import { TestimonialCard } from './testimonial-card'
export function HomeTestimonials() {
    return (
        <section className="relative flex w-full flex-col gap-10 px-7 py-14 lg:px-24 lg:py-28">
            <div className="absolute bottom-0 right-0 -z-10 size-full bg-ly-dark-azure-transparent fill-inherit" />
            <Image
                src={backgroundImage}
                priority={true}
                unoptimized
                alt="Fundo de profissional da programação programando."
                fill={true}
                sizes="100%"
                className="-z-20 rounded-lg object-cover"
            />
            <div className="mx-auto flex max-w-[630px] flex-col items-center justify-center gap-4 text-center text-ly-white">
                <h2 className="flex flex-col pb-4 text-2xl font-bold lg:text-3xl">
                    Depoimentos
                    <DoodleUnderline color="red" size="thin" />
                </h2>
                <p className="text-pretty leading-7 tracking-widest">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    semper dalar elementum tempus hac tellus libero accumsan.{' '}
                </p>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row">
                <TestimonialCard
                    positionCard={0}
                    quote="“An amazing service”"
                    description="Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas."
                    author="John Carter"
                    role="Designer"
                    company="BRIX Templates"
                />
                <TestimonialCard
                    positionCard={1}
                    quote="“One of a kind service”"
                    description="Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis."
                    author="Sophie Moore"
                    role="Head of Design"
                    company="BRIX Templates"
                />
                <TestimonialCard
                    positionCard={2}
                    quote="“The best service”"
                    description="Convallis posuere morbi leo urna molestie at elementum eu facilisis sapien pellentesque habitant."
                    author="Andy Smith"
                    role="Developer"
                    company="BRIX Templates"
                />
            </div>
        </section>
    )
}
