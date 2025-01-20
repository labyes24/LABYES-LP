import { AboutHistoryTimeline2 } from './about-history-timeline2'

export function AboutHistory() {
    return (
        <section className="my-16 flex flex-col gap-6 lg:gap-16">
            <div className="flex flex-col items-center justify-center gap-4 text-center text-ly-dark-azure-600">
                <h2 className="text-3xl font-medium lg:text-4xl">História</h2>
                <p className="max-w-md text-pretty leading-7 tracking-widest">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et
                </p>
            </div>
            <AboutHistoryTimeline2 />
            {/* <AboutHistoryTimeline /> */}
        </section>
    )
}
