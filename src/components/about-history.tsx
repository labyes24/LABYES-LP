import { AboutHistoryTimeline } from './about-history-timeline'

export function AboutHistory() {
    return (
        <section className="flex flex-col gap-6 bg-section-light px-6 py-16 text-section-light-foreground lg:gap-16">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <h2 className="text-3xl font-medium lg:text-5xl">História</h2>
                <p className="max-w-md text-pretty text-sm leading-7 tracking-widest lg:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et
                </p>
            </div>
            {/* <AboutHistoryTimeline2 /> */}
            <AboutHistoryTimeline />
        </section>
    )
}
