import Image from 'next/image'

import PlaceholderImage from '@/assets/project_card_placeholder.svg'

export function AboutManifest() {
    return (
        <section className="flex w-full flex-col items-center justify-center gap-10 p-4">
            <div className="mx-auto flex max-w-[430px] flex-col items-center justify-center text-center text-ly-dark-azure-600">
                <strong className="mb-4 mt-14 flex flex-col text-pretty font-sans text-[18px]/[20px] font-bold uppercase tracking-widest text-ly-dark-azure-600">
                    Our process
                </strong>
                <h2 className="mb-4 text-pretty font-sans text-[28px]/[38px] font-bold">
                    Manifesto
                </h2>

                <p className="mb-9 text-pretty font-sans text-base/[28px] font-normal text-ly-dark-azure-600">
                    Lorem ipsum dolor sit amet consectetur adipiscing eli mattis
                    sit phasellus mollis.
                </p>
            </div>
            <div className="mx-auto flex max-w-[430px] flex-col items-center justify-center text-center text-ly-dark-azure-600">
                <Image
                    src={PlaceholderImage}
                    priority={true}
                    width={80}
                    height={80}
                    unoptimized
                    alt="Imagem de Placeholder"
                    className="mb-4"
                />
                <h3 className="mb-3 font-sans text-lg/6 font-bold text-ly-dark-azure-600">
                    Download our free app
                </h3>
                <p className="mb-9 text-pretty font-sans text-base/[28px] font-normal text-ly-dark-azure-600">
                    Lorem ipsum dolor sit amet consecte tur adipiscing elit
                    semper dalar consectur elementum tempus hac.
                </p>
            </div>
        </section>
    )
}
