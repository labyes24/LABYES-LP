import Image from 'next/image'

import PlaceholderImage from '@/assets/project_card_placeholder.svg'

interface AboutManifestItemProps {
    title: string
    description: string
    image?: string
}

export function AboutManifestItem({
    title,
    image,
    description,
}: AboutManifestItemProps) {
    const imageUrl = image ?? PlaceholderImage.src
    return (
        <div className="flex flex-col items-center justify-center">
            <Image
                src={imageUrl}
                priority={true}
                width={80}
                height={80}
                unoptimized
                alt="Imagem de Placeholder"
                className="mb-4"
            />
            <h3 className="mb-[10px] font-sans text-lg/6 font-bold text-ly-dark-azure-600">
                {title}
            </h3>
            <p className="text-pretty font-sans text-base/[28px] font-normal text-ly-dark-azure-600">
                {description}
            </p>
        </div>
    )
}
