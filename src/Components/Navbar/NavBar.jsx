
import { FiShoppingCart } from "react-icons/fi";

const Navbar = ({ count }) => {
    return (

        <div className="navbar bg-base-100 fixed top-0 right-0 left-0 z-50 shadow-sm w-full">

            <div className="max-w-[1200px] mx-auto w-full flex items-center justify-between px-4">

                <div>
                    <a className="text-2xl font-extrabold bg-gradient-to-b from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                        DigiTools
                    </a>
                </div>

                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal gap-6 text-sm font-medium whitespace-nowrap">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>

                <div className="flex items-center gap-6">

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="relative inline-flex items-center p-2 group cursor-pointer">
                                <FiShoppingCart className="text-2xl transition-transform group-hover:scale-110" />
                                {
                                    count > 0 && (
                                        <span className="absolute top-0 right-0 bg-red-500 text-white text-sm font-bold  min-w-[20px] flex items-center justify-center rounded-full px-1">
                                            {count}
                                        </span>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <a className="text-lg font-medium cursor-pointer">Login</a>

                    <button className="btn rounded-full text-white font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 px-6">
                        Get Started
                    </button>

                </div>

            </div>
        </div>

    );
};

export default Navbar;