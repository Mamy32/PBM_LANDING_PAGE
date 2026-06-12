export default function MediaFeatures() {
    return (
                <section
className="
  py-16 lg:py-24
  bg-gradient-to-r
  from-[#0B3D2E]
  via-[#072B1F]
  to-[#031610]
  overflow-hidden
"
>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">

                {/* Title */}
                <h2 className="mb-8 lg:mb-12 text-center font-serif text-4xl sm:text-5xl font-semibold text-white">
                    As Seen on
                </h2>

                {/* Logos */}
               <div className="mb-10 lg:mb-16 flex justify-center gap-4 sm:gap-6">

                    <img
                        src="/images/shaundju/logo01.png"
                        alt="The Overpost"
                        className="h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover"
                    />

                    <img
                        src="/images/shaundju/logo02.png"
                        alt="Suara Berkelas"
                        className="h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover"
                    />

                </div>

                {/* Videos */}
                <div className="grid gap-4 lg:gap-6 lg:grid-cols-2">

                    <img
                        src="/images/shaundju/video01.png"
                        alt="Interview 1"
                    className="w-full rounded-xl shadow-xl"
                    />

                    <img
                        src="/images/shaundju/video02.png"
                        alt="Interview 2"
                        className="w-full rounded-xl shadow-xl"
                    />

                </div>

            </div>
        </section>
    );
}