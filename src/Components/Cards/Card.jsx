import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Card = ({ product, setCount, selectedProducts, setSelectedProducts }) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleBuyNow = () => {
        if (isSelected) return;
        setIsSelected(true);

        setCount(prev => prev + 1);

        toast.success(`${product.name} Added to Cart Successfully.`)
        setIsSelected(true);
        setSelectedProducts([...selectedProducts, product])

    }

    return (
        <div className="card bg-base-100 rounded-2xl border-3 border-gray-200 ">
            <div className="card-body p-3">

                <div className="flex justify-end">
                    <span
                        className={`badge badge-sm p-4 rounded-full ${product.tagType === "Best Seller"
                            ? "bg-[#FEF3C6] font-bold text-[#BB4D00]"
                            : product.tagType === "Popular"
                                ? "bg-[#E1E7FF] font-bold text-[#4F39F6]"
                                : product.tagType === "New"
                                    ? "bg-[#DBFCE7] font-bold text-[#0A883E]"
                                    : ""
                            }`}
                    >
                        {product.tagType}
                    </span>
                </div>

                <div className="flex justify-start my-4">
                    <img className="h-10 w-10 object-contain" src={product.productImg} alt="icon" />
                </div>

                <div className="text-left">
                    <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                    <p className='text-[#627382] mb-4'>{product.description}</p>
                    <p className="text-xl font-bold">${product.price}<span className='text-[#627382] font-medium'>/Mo</span> </p>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-[#627382]">
                    {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                            <svg
                                className="w-4 h-4 text-green-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                        </li>
                    ))}
                </ul>

                <div className="mt-4 flex justify-center">
                    <button
                        onClick={handleBuyNow}
                        className={`btn w-full h-14 mx-auto rounded-full text-white font-bold transition-all duration-300 
                            ${isSelected
                                ? "bg-green-500"
                                : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90"
                            }`}
                    >
                        {isSelected ? "Added ✓" : "Buy Now"}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Card;