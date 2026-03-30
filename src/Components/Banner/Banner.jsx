

const Banner = () => {
    return (
        <div className="max-w-[1200px] mx-auto w-full px-4 mt-20">

            <div className="grid lg:grid-cols-2 gap-12 items-center">

                <div className="space-y-6">


                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium">

                        <img src="/src/assets/Group 5.png" alt="" />

                        New: AI-Powered Tools Available
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
                        Supercharge Your <br /> Digital Workflow
                    </h1>

                    <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.

                        Explore Products
                    </p>


                    <div className="flex items-center gap-4">

                        <button className="px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#6C3BFF] to-[#A855F7] hover:opacity-90 transition cursor-pointer">
                            Explore Products
                        </button>

                        <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-purple-500 text-purple-600 font-semibold hover:bg-purple-50 transition cursor-pointer">
                            ▶ Watch Demo
                        </button>

                    </div>

                </div>

                <div className="flex justify-center">
                    <img
                        src="/src/assets/banner.png"
                        alt="banner"
                        className="w-full max-w-md lg:max-w-lg rounded-2xl object-cover"
                    />
                </div>

            </div>

        </div>
    );
};

export default Banner;