import Image from 'next/image'

import PlaceholderImage from '@/assets/project_card_placeholder.svg'

export function AboutManifest() {
    return (
        <section className="relative flex w-full flex-col gap-10 p-7">
            <div className="mx-auto flex max-w-[630px] flex-col items-center justify-center text-center text-ly-white">
                <strong className="mb-2 mt-52 flex flex-col text-pretty font-sans text-[28px]/[38px] font-bold text-ly-white lg:text-3xl">
                    Our process
                </strong>
                <h2 className="text-pretty font-sans text-lg/7 font-bold">
                    Manifesto
                </h2>

                <p className="mb-24 text-pretty indent-0.5 font-sans text-[22px]/9 font-normal">
                    Lorem ipsum dolor sit amet consectetur adipiscing eli mattis
                    sit phasellus mollis.
                </p>
            </div>
            <div>
                <Image
                    src={PlaceholderImage}
                    priority={true}
                    unoptimized
                    alt="Imagem de Placeholder"
                    fill={true}
                    sizes="100%"
                    className="-z-20 rounded-lg object-cover"
                />
                <h3>Download our free app</h3>
                <p>
                    Lorem ipsum dolor sit amet consecte tur adipiscing elit
                    semper dalar consectur elementum tempus hac.
                </p>
            </div>
        </section>
    )
}
