import Doodle from '@/assets/supporters_doodle.svg'
import { LogoGilmar } from './svg/logo-gilmar'
import { LogoRK } from './svg/logo-rk'
import { LogoSSIG } from './svg/logo-ssig'

const supporters = [
    {
        id: 1,
        SVG: LogoGilmar,
        alt: 'Logo Gil Santana',
    },
    {
        id: 2,
        SVG: LogoRK,
        alt: 'Logo RK Imóveis',
    },
    {
        id: 3,
        SVG: LogoSSIG,
        alt: 'Logo SSIG',
    },
]

export function SupportersSection() {
    return (
        <>
            <section
                className="flex min-h-[50vh] flex-col items-center bg-section-light pb-36 pt-20 font-sans text-section-light-foreground"
                style={{
                    backgroundImage: `url(${Doodle.src})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom -185px right -220px',
                }}
            >
                <h2 className="mb-28 text-3xl font-bold">Parceiros</h2>

                <ul className="grid grid-cols-1 justify-center gap-x-16 gap-y-20 px-8 lg:flex lg:w-full lg:justify-around">
                    {supporters.map((supporter) => {
                        const { SVG } = supporter
                        return (
                            <li
                                key={supporter.id}
                                className="flex justify-center align-middle"
                            >
                                <SVG
                                    fill="hsl(var(--section-light-foreground))"
                                    className="h-20 lg:h-24"
                                    alt={supporter.alt}
                                    aria-label={supporter.alt}
                                />
                            </li>
                        )
                    })}
                </ul>
            </section>
        </>
    )
}
