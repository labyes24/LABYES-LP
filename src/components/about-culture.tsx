import backgroundImage from '@/assets/background-1.webp'
import Image from 'next/image'
import { DoodleUnderline } from './svg/doodle-underline'

export function AboutCulture() {
    return (
        <section className="relative mx-auto flex w-full flex-col items-center justify-center gap-10 bg-section-medium/90 p-7 text-section-medium-foreground lg:pt-28">
            <div className="absolute bottom-0 right-0 -z-10 size-full fill-inherit" />
            <Image
                src={backgroundImage}
                priority={true}
                unoptimized
                alt="Fundo com pessoa em mesa de trabalho com um livro na mão em frente a um computador."
                fill={true}
                sizes="100%"
                className="-z-20 object-cover"
            />
            <div className="mx-auto flex max-w-[630px] flex-col items-center justify-center text-center lg:grid lg:w-full lg:max-w-none lg:grid-cols-[2fr_1fr] lg:grid-rows-1 lg:items-start lg:gap-8 lg:p-16">
                <div className="mt-52 flex flex-col lg:mt-0 lg:max-w-[630px] lg:text-start">
                    <strong className="mb-2 flex flex-col text-pretty font-sans text-[28px]/[38px] font-bold lg:text-4xl">
                        Exceptional materials. The most durable glass ever in a
                        smartphone. A beautiful new gold finish, achieved with
                        an atomic-level.
                    </strong>
                    <span className="text-pretty font-sans text-lg/7 font-bold">
                        Richard Davidson,
                    </span>
                    <span className="mb-9 text-pretty font-sans text-lg/7 font-normal">
                        Project Manager at Skyscanner.{' '}
                    </span>
                </div>
                <p className="mb-24 text-pretty indent-0.5 font-sans text-[22px]/9 font-normal lg:mb-0 lg:max-w-[330] lg:text-start lg:text-2xl">
                    The skeleton plan of a website can be broken down into three
                    components
                </p>
            </div>
            <DoodleUnderline
                color="default"
                size="large"
                className="mb-14 lg:mb-0"
            />
        </section>
    )
}
