import Image from 'next/image'

import PlaceholderImage from '@/assets/project_card_placeholder.svg'

interface LastProductionItemProps {
    title: string
    description: string
    image?: string
}

export function LastProductionItem({
    title,
    image,
    description,
}: LastProductionItemProps) {
    const imageUrl = image ?? PlaceholderImage.src
    return (
        <>
            <div className="mb-6 flex w-[380px] flex-row items-center justify-start gap-4 rounded-3xl border-[1px] border-ly-dark-azure-600 p-4">
                <Image
                    src={imageUrl}
                    priority={true}
                    width={80}
                    height={80}
                    unoptimized
                    alt="Imagem de Placeholder"
                    className="items-start justify-center"
                />

                <div className="flex flex-col items-start justify-center gap-2">
                    <h3 className="text-start font-sans text-[22px]/[28px] font-bold text-ly-dark-azure-600">
                        {title}
                    </h3>
                    <p className="text-pretty font-sans text-base/[28px] font-normal text-ly-dark-azure-600">
                        {description}
                    </p>
                </div>
            </div>
        </>
    )
}
