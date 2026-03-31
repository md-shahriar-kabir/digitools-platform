

const SelectedCard = ({ product, handleRemoveBtn }) => {
    return (
        <div>
            <div className='flex items-center gap-6 justify-between p-10 rounded-2xl bg-[#e6e9ee60]'>
                <div className='flex items-center gap-6'>
                    <div className='border border-[#62738241] rounded-full p-3.5 bg-white'>
                        <img className="h-12 w-12 " src={product.productImg
                        } alt="product.name" />
                    </div>
                    <div className='text-left'>
                        <h2 className='flex font-semibold text-2xl mb-2'>{product.name}</h2>
                        <p className='text-[#627382] font-medium'>${product.price}</p>
                    </div>
                </div>
                <button className='font-bold text-[#FF3980] cursor-pointer hover:bg-red-100 rounded-sm px-3 py-1' onClick={() => handleRemoveBtn(product)}>
                    Remove
                </button>
            </div>
            <div>
                <div className='flex justify-between mt-5 mb-3'>
                    <div className='text-[#627382] text-xl'>
                        Total
                    </div>
                    <div className='text-2xl font-bold'>
                        $0
                    </div>
                </div>
                <button className='btn w-full max-w-6xl h-14 rounded-full text-white font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>
                    Proceed To Checkout
                </button>
            </div>
        </div>
    );
};

export default SelectedCard;