import backgroundImage from '@/assets/background-1.webp'
import Image from 'next/image'
import { DoodleUnderline } from './svg/doodle-underline'

export function AboutCulture() {
    return (
        <section className="relative flex w-full flex-col gap-10 p-7">
            <div className="absolute bottom-0 right-0 -z-10 size-full bg-ly-dark-azure-transparent fill-inherit" />
            <Image
                src={backgroundImage}
                priority={true}
                unoptimized
                alt="Fundo com pessoa em mesa de trabalho com um livro na mão em frente a um computador."
                fill={true}
                sizes="100%"
                className="-z-20 object-cover"
            />
            <div className="mx-auto flex max-w-[630px] flex-col items-center justify-center text-center text-ly-white">
                <strong className="mb-2 mt-52 flex flex-col text-pretty font-sans text-[28px]/[38px] font-bold text-ly-white lg:text-3xl">
                    Exceptional materials. The most durable glass ever in a
                    smartphone. A beautiful new gold finish, achieved with an
                    atomic-level.
                </strong>
                <span className="text-pretty font-sans text-lg/7 font-bold">
                    Richard Davidson,
                </span>
                <span className="mb-9 text-pretty font-sans text-lg/7 font-normal">
                    Project Manager at Skyscanner.{' '}
                </span>
                <p className="mb-24 text-pretty indent-0.5 font-sans text-[22px]/9 font-normal">
                    The skeleton plan of a website can be broken down into three
                    components
                </p>

                <DoodleUnderline
                    color="default"
                    size="large"
                    className="mb-14"
                />
            </div>
        </section>
    )
}
