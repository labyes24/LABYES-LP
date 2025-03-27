import { AboutHistoryTimeline } from './about-history-timeline'

export function AboutHistory() {
    return (
        <section className="flex flex-col gap-6 bg-section-light px-6 py-16 text-section-light-foreground lg:gap-16">
            <div className="flex flex-col items-center justify-center gap-7 text-center">
                <h2 className="text-3xl font-medium lg:text-5xl">História</h2>
                <p className="max-w-xl text-pretty text-sm leading-7 tracking-widest lg:max-w-4xl lg:text-lg">
                    O <span className="font-bold">Lab Yes!</span> é um espaço
                    que valoriza o aprendizado contínuo e a colaboração entre
                    pessoas de diferentes trajetórias. Acreditamos que a troca
                    de experiências e a diversidade de perfis são essenciais
                    para gerar inovação. Nosso objetivo é apoiar talentos e
                    criar conexões reais, impulsionando o crescimento no mercado
                    de tecnologia.
                </p>
            </div>
            {/* <AboutHistoryTimeline2 /> */}
            <AboutHistoryTimeline />
        </section>
    )
}
