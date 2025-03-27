import Image, { StaticImageData } from 'next/image'

import PlaceholderImage from '@/assets/project_card_placeholder.svg'

interface AboutManifestItemProps {
    title: string
    description: string
    image?: string | StaticImageData
}

export function AboutManifestItem({
    title,
    image,
    description,
}: AboutManifestItemProps) {
    const imageUrl = image ?? PlaceholderImage.src
    return (
        <div className="flex flex-col items-center justify-center lg:max-w-[364px]">
            <Image
                src={imageUrl}
                priority={true}
                width={80}
                height={80}
                unoptimized
                alt="Imagem de Placeholder"
                className="mb-4 lg:h-28 lg:w-28"
            />
            <h3 className="mb-[10px] font-sans text-lg/6 font-bold text-ly-dark-azure-600 lg:text-[28px]/[38px]">
                {title}
            </h3>
            <p className="font text-pretty font-sans text-base/[28px] font-normal text-ly-dark-azure-600 lg:text-lg/[30px]">
                {description}
            </p>
        </div>
    )
}
