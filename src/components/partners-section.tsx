import { LogoGilmar } from './svg/logo-gilmar'
import { LogoRK } from './svg/logo-rk'
import { LogoSSIG } from './svg/logo-ssig'

const partners = [
    {
        id: 1,
        svg: LogoRK,
        alt: 'Logo Rk Imóveis',
        link: 'https://www.rkimoveis.com.br/',
    },
    {
        id: 2,
        svg: LogoSSIG,
        alt: 'Logo SSIG',
        link: 'https://www.ssig.tech/',
    },
    {
        id: 3,
        svg: LogoGilmar,
        alt: 'Logo Gil Santana',
        link: 'https://www.linkedin.com/company/gsantana/',
    },
]

export function PartnersSection() {
    return (
        <section className="flex min-h-[300px] flex-col items-center justify-center bg-section-dark px-7 py-16 font-['DM_Sans'] text-section-dark-foreground">
            <ul className="grid grid-cols-1 justify-center gap-x-16 gap-y-20 px-8 align-middle lg:flex lg:w-full lg:justify-around">
                {partners.map((partner) => {
                    const Logo = partner.svg

                    return (
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
                                <Logo
                                    fill="hsl(var(--section-dark-foreground))"
                                    className="h-20 lg:h-24"
                                    alt={partner.alt}
                                    aria-label={partner.alt}
                                />
                            </a>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
