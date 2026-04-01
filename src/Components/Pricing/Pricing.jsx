


const Pricing = () => {
    return (
        <div>

            <section class="py-16 px-4 text-center">
                <h1 class="text-black text-4xl md:text-5xl font-bold mb-4">
                    Simple, Transparent Pricing
                </h1>
                <p class="text-gray-400 mb-12">
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>

                <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                    <div class="bg-gray-100 text-black p-6 rounded-2xl shadow">
                        <h2 class="text-2xl font-semibold mb-2">Starter</h2>
                        <p class="mb-4 text-gray-600">Perfect for getting started</p>

                        <div class="text-4xl font-bold mb-4">
                            $0 <span class="text-lg font-normal">/Month</span>
                        </div>

                        <ul class="text-left space-y-2 mb-6">
                            <li>✔ Access to 10 free tools</li>
                            <li>✔ Basic templates</li>
                            <li>✔ Community support</li>
                            <li>✔ 1 project per month</li>
                        </ul>

                        <button class="w-full p-3 rounded-full text-white font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 cursor-pointer">
                            Get Started Free
                        </button>
                    </div>

                    <div class="relative bg-gradient-to-br from-purple-600 to-indigo-600 p-6 rounded-2xl shadow scale-105">

                        <span class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-3 py-1 text-sm rounded-full">
                            Most Popular
                        </span>

                        <h2 class="text-2xl font-semibold mb-2 text-white">Pro</h2>
                        <p class="mb-4 text-gray-200">Best for professionals</p>

                        <div class="text-4xl font-bold mb-4 text-white">
                            $29 <span class="text-lg font-normal">/Month</span>
                        </div>

                        <ul class="text-left space-y-2 mb-6 text-white">
                            <li>✔ Access to all premium tools</li>
                            <li>✔ Unlimited templates</li>
                            <li>✔ Priority support</li>
                            <li>✔ Unlimited projects</li>
                            <li>✔ Cloud sync</li>
                            <li>✔ Advanced analytics</li>
                        </ul>

                        <button class="w-full py-2 font-bold rounded-full border bg-white text-purple-900 hover:shadow-l hover:-translate-y-1 group cursor-pointer">
                            Start Pro Trial
                        </button>
                    </div>


                    <div class="bg-gray-100 text-black p-6 rounded-2xl shadow">
                        <h2 class="text-2xl font-semibold mb-2">Enterprise</h2>
                        <p class="mb-4 text-gray-600">For teams and businesses</p>

                        <div class="text-4xl font-bold mb-4">
                            $99 <span class="text-lg font-normal">/Month</span>
                        </div>

                        <ul class="text-left space-y-2 mb-6">
                            <li>✔ Everything in Pro</li>
                            <li>✔ Team collaboration</li>
                            <li>✔ Custom integrations</li>
                            <li>✔ Dedicated support</li>
                            <li>✔ SLA guarantee</li>
                            <li>✔ Custom branding</li>
                        </ul>

                        <button class="w-full p-3 rounded-full text-white font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 cursor-pointer">
                            Contact Sales
                        </button>
                    </div>

                </div>
            </section>

        </div>

    );
}

export default Pricing;