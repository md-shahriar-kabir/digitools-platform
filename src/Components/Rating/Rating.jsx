

const RatingSection = () => {
    return (
        <div className="w-full bg-gradient-to-r from-[#5B2EFF] to-[#C026D3] py-16 mt-20">

            <div className="max-w-[1200px] mx-auto px-30">

                <div className="flex text-center text-white">

                    <div className="space-y-2">
                        <h2 className="text-4xl md:text-5xl font-extrabold">50K+</h2>
                        <p className="text-white/80 text-lg">Active Users</p>
                    </div>

                    <div className="hidden md:block border-l border-white/30 h-16 mx-auto"></div>

                    <div className="space-y-2">
                        <h2 className="text-4xl md:text-5xl font-extrabold">200+</h2>
                        <p className="text-white/80 text-lg">Premium Tools</p>
                    </div>

                    <div className="hidden md:block border-l border-white/30 h-16 mx-auto"></div>

                    <div className="space-y-2">
                        <h2 className="text-4xl md:text-5xl font-extrabold">4.9</h2>
                        <p className="text-white/80 text-lg">Rating</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default RatingSection;