import { AboutManifestItem } from '@/components/about-manifest-item'

export function AboutManifest() {
    return (
        <section className="my-[60px] flex w-full flex-col items-center justify-center gap-9 px-6">
            <div className="mx-auto flex max-w-[430px] flex-col items-center justify-center text-center text-ly-dark-azure-600">
                <strong className="mb-4 flex flex-col text-pretty font-sans text-[18px]/[20px] font-bold uppercase tracking-widest text-ly-dark-azure-600">
                    Our process
                </strong>
                <h2 className="mb-4 text-pretty font-sans text-[28px]/[38px] font-bold">
                    Manifesto
                </h2>

                <p className="text-pretty font-sans text-base/[28px] font-normal text-ly-dark-azure-600">
                    Lorem ipsum dolor sit amet consectetur adipiscing eli mattis
                    sit phasellus mollis.
                </p>
            </div>
            <div className="mx-auto flex max-w-[430px] flex-col items-center justify-center gap-9 text-center text-ly-dark-azure-600">
                <AboutManifestItem
                    title="Download our free app"
                    description="Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar consectur elementum tempus hac."
                />
                <AboutManifestItem
                    title="Create an account"
                    description="Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar consectur elementum tempus hac."
                />
                <AboutManifestItem
                    title="Enjoy our app"
                    description="Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar consectur elementum tempus hac."
                />
            </div>
        </section>
    )
}
