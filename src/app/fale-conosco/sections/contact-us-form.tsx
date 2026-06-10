import Image from 'next/image'

import Bullseye from '@/assets/icons/bullseye.svg'
import CoolEmoji from '@/assets/icons/cool_emoji.svg'
import Lightning from '@/assets/icons/lightning.svg'
import Tailwind from '@/assets/icons/tailwind.svg'
import VSCode from '@/assets/icons/vscode.svg'
import ZigzagArrow from '@/assets/icons/zigzag_arrow.svg'

import { ContactForm } from '@/components/contact-form'

const icons = {
    Bullseye,
    CoolEmoji,
    Lightning,
    Tailwind,
    VSCode,
    ZigzagArrow,
}

export function ContactUsFormSection() {
    return (
        <section className="relative min-h-[460px] overflow-x-clip px-6 pb-20 pt-14 min-[1475px]:overflow-x-visible">
            <div className="absolute inset-0 -z-20 bg-[url('/img/tatami.jpg')] bg-center bg-repeat" />
            <Image
                src={icons.Bullseye}
                alt="Bullseye"
                className="absolute left-[10px] top-[17px] -z-10 h-auto w-auto duration-1000 animate-in fade-in lg:scale-[160%]"
            />
            <Image
                src={icons.Lightning}
                alt="Lightning"
                className="absolute right-[18px] top-[17px] -z-10 h-auto w-auto delay-75 duration-1000 animate-in fade-in lg:scale-[160%]"
            />
            <Image
                src={icons.ZigzagArrow}
                alt="Zigzag Arrow"
                className="absolute left-[8px] top-[51%] -z-10 h-auto w-auto delay-100 duration-1000 animate-in fade-in lg:scale-[160%]"
            />
            <Image
                src={icons.VSCode}
                alt="VSCode"
                className="absolute right-[8px] top-[51%] -z-10 h-auto w-auto delay-150 duration-1000 animate-in fade-in lg:scale-[160%]"
            />

            <Image
                src={icons.Tailwind}
                alt="Tailwind"
                className="absolute bottom-[18px] left-[8px] -z-10 h-auto w-auto delay-200 duration-1000 animate-in fade-in lg:scale-[160%]"
            />
            <Image
                src={icons.CoolEmoji}
                alt="Cool Emoji"
                className="delay-250 absolute bottom-[18px] right-[8px] -z-10 h-auto w-auto duration-1000 animate-in fade-in lg:scale-[160%]"
            />

            <h3 className="text-center text-3xl font-bold leading-none">
                Entre no Tatame
            </h3>

            <ContactForm className="mt-10" />
        </section>
    )
}
