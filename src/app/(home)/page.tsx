import Doodle from '@/assets/supporters_doodle_full.svg'

export default function Home() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">Home</h1>

            <section
                className="flex min-h-[50vh] flex-col items-center pb-[9rem] pt-[5rem] font-['DM_Sans'] text-ly-dark-azure-600"
                style={{
                    backgroundImage: `url(${Doodle.src})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom -185px right -220px',
                }}
            >
                <h2 className="text-3xl font-bold">Apoiadores</h2>
            </section>
        </>
    )
}
