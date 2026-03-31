const SelectedProduct = ({ selectedProducts }) => {

    return (
        <div>

            <div className='space-y-5 border-3 border-[#62738241] rounded-2xl p-6'>
                <h3 className='font-bold text-3xl'>Your Cart</h3>
                {
                    selectedProducts.map((product, ind) => {
                        return <div key={ind} className='flex  gap-6 justify-between p-10 rounded-2xl border bg-[#e6e9ee60]'>
                            <div className='flex items-center gap-6'>
                                <div className='border border-[#62738241] rounded-full p-3.5 bg-white'>
                                    <img className="h-12 w-12 " src={product.productImg
                                    } alt="icon" />
                                </div>
                                <div>
                                    <h2 className='flex  gap-2 font-semibold text-xl'>{product.name}</h2>
                                    <p className='text-[#627382] font-medium'>${product.price}</p>
                                </div>
                            </div>
                            <button className='font-bold text-[#FF3980] cursor-pointer hover:bg-amber-100 rounded-sm px-3 py-1'>
                                Remove
                            </button>

                        </div>
                    })
                }
            </div>


        </div>
    );
};

export default SelectedProduct;