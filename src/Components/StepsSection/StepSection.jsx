

const StepSection = () => {
    return (
        <div className=" bg-gray-100 text-center">
            <div className="max-w-[1200px] mx-auto">
                <div className="pt-10 pb-10">
                    <h2 className="text-3xl font-bold">
                        Get Started In 3 Steps
                    </h2>
                    <p>Start using premium digital tools in minutes, not hours.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">

                    <div className="p-6 bg-white rounded-xl shadow">
                        <p className="bg-purple-600 rounded-4xl w-8 h-8 flex justify-end ">01</p>
                        <h3 className="font-semibold mb-2">Create Account</h3>
                        <p className="text-gray-500">Sign up easily</p>
                    </div>

                    <div className="p-6 bg-white rounded-xl shadow">
                        <h3 className="font-semibold mb-2">Choose Products</h3>
                        <p className="text-gray-500">Select tools</p>
                    </div>

                    <div className="p-6 bg-white rounded-xl shadow">
                        <h3 className="font-semibold mb-2">Start Creating</h3>
                        <p className="text-gray-500">Use instantly</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StepSection;