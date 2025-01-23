import Partner01 from '@/assets/supporter_01.svg'
import Partner02 from '@/assets/supporter_02.svg'
import Partner03 from '@/assets/supporter_03.svg'
import Partner04 from '@/assets/supporter_04.svg'
import Partner05 from '@/assets/supporter_05.svg'
import Partner06 from '@/assets/supporter_06.svg'
import Image from 'next/image'

const partners = [
    {
        id: 1,
        src: Partner01.src,
        alt: 'Partner 01',
        link: '#',
    },
    {
        id: 2,
        src: Partner02.src,
        alt: 'Partner 02',
        link: '#',
    },
    {
        id: 3,
        src: Partner03.src,
        alt: 'Partner 03',
        link: '#',
    },
    {
        id: 4,
        src: Partner04.src,
        alt: 'Partner 04',
        link: '#',
    },
    {
        id: 5,
        src: Partner05.src,
        alt: 'Partner 05',
        link: '#',
    },
    {
        id: 6,
        src: Partner06.src,
        alt: 'Partner 06',
        link: '#',
    },
]

export function PartnersSection() {
    return (
        <>
            <section className="flex min-h-[300px] flex-col items-center justify-center bg-ly-gray-100 px-7 py-12 font-['DM_Sans'] text-ly-dark-azure-600">
                <ul className="grid grid-cols-2 justify-center gap-x-16 gap-y-20 px-8 align-middle lg:flex">
                    {partners.map((partner) => (
                        <li
                            key={partner.id}
                            className="flex justify-center align-middle"
                        >
                            <a
                                className="flex justify-center align-middle"
                                href={partner.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src={partner.src}
                                    alt={partner.alt}
                                    width={130}
                                    height={35}
                                    unoptimized
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}
