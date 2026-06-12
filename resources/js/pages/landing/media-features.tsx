export default function MediaFeatures() {
    return (
        <section className="bg-gradient-to-r from-[#123C2D] via-[#1E4D3A] to-[#123C2D] py-24">
            <div className="mx-auto max-w-6xl px-6">

                {/* Title */}
                <h2 className="mb-12 text-center font-serif text-5xl font-semibold text-white">
                    As Seen on
                </h2>

                {/* Logos */}
                <div className="mb-16 flex justify-center gap-6">

                    <img
                        src="/images/shaundju/overpost-logo01.png"
                        alt="The Overpost"
                        className="h-16 w-16 rounded-full object-cover"
                    />

                    <img
                        src="/images/shaundju/suaraberkelas-logo02.png"
                        alt="Suara Berkelas"
                        className="h-16 w-16 rounded-full object-cover"
                    />

                </div>

                {/* Videos */}
                <div className="grid gap-6 lg:grid-cols-2">

                    <img
                        src="/images/shaundju/video01.png"
                        alt="Interview 1"
                        className="w-full rounded-lg shadow-xl"
                    />

                    <img
                        src="/images/shaundju/video02.png"
                        alt="Interview 2"
                        className="w-full rounded-lg shadow-xl"
                    />

                </div>

            </div>
        </section>
    );
}