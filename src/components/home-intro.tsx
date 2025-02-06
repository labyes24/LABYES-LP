import { DoodleHeartArrow } from './svg/doodle-heart-arrow'
import { DoodleLight } from './svg/doodle-light'
import { Separator } from './ui/separator'

export function HomeIntro() {
    return (
        <section className="relative flex flex-col gap-10 px-6 py-10 pt-20 lg:pt-14">
            <DoodleHeartArrow className="absolute left-8 top-5 -z-[1] h-16 w-16 lg:left-[77px] lg:top-[19px] lg:h-28 lg:w-28" />

            <div className="mx-auto flex max-w-[720px] flex-col gap-4 text-center text-ly-dark-azure-600 lg:gap-6">
                <h2 className="text-2xl font-bold lg:text-3xl">Introdução</h2>
                <p className="text-lg font-light leading-loose lg:leading-loose lg:tracking-widest">
                    &quot;When applied to building block a website or similar
                    work product, a Visual Guide can be an intermediate step
                    toward the end goal of a complete website. By creating a
                    visual guide along the way, the designer or developer can
                    get input from the other people involved in the website such
                    as the customer, their manager, and other members of the
                    team.&quot;
                </p>
            </div>

            <div className="flex flex-col">
                <Separator />
                <span className="mx-auto w-44 border-b-2 border-ly-dark-azure-600 lg:w-96" />
            </div>

            <DoodleLight className="absolute bottom-8 right-4 -z-[1] h-20 w-20 lg:h-36 lg:w-36" />
        </section>
    )
}
