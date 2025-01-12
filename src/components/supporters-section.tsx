import Supporter01 from '@/assets/supporter_01.svg'
import Supporter02 from '@/assets/supporter_02.svg'
import Supporter03 from '@/assets/supporter_03.svg'
import Supporter04 from '@/assets/supporter_04.svg'
import Supporter05 from '@/assets/supporter_05.svg'
import Supporter06 from '@/assets/supporter_06.svg'
import Doodle from '@/assets/supporters_doodle.svg'

export function SupportersSection() {
    return (
        <>
            <section
                className="flex min-h-[50vh] flex-col items-center pb-36 pt-20 font-['DM_Sans'] text-ly-dark-azure-600"
                style={{
                    backgroundImage: `url(${Doodle.src})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom -185px right -220px',
                }}
            >
                <h2 className="mb-28 text-3xl font-bold">Apoiadores</h2>

                <ul className="grid grid-cols-2 justify-center gap-x-16 gap-y-20 px-8 lg:flex">
                    <li className="flex justify-center">
                        <img src={Supporter01.src} alt="" />
                    </li>
                    <li className="flex justify-center">
                        <img src={Supporter02.src} alt="" />
                    </li>
                    <li className="flex justify-center">
                        <img src={Supporter03.src} alt="" />
                    </li>
                    <li className="flex justify-center">
                        <img src={Supporter04.src} alt="" />
                    </li>
                    <li className="flex justify-center">
                        <img src={Supporter05.src} alt="" />
                    </li>
                    <li className="flex justify-center">
                        <img src={Supporter06.src} alt="" />
                    </li>
                </ul>
            </section>
        </>
    )
}
