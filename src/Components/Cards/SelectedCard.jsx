

const SelectedCard = ({ product, handleRemoveBtn }) => {
    return (
        <div>
            <div className='flex justify-between items-center gap-6 p-6 border rounded-2xl bg-[#e6e9ee60]'>
                <div className='flex items-center gap-6'>
                    <div className='border border-[#62738241] rounded-full p-3.5 bg-white'>
                        <img className="h-10 w-10 " src={product.productImg
                        } alt="product.name" />
                    </div>
                    <div className='text-left'>
                        <h2 className='flex font-semibold text-xl mb-2'>{product.name}</h2>
                        <p className='text-[#627382] font-medium'>${product.price}</p>
                    </div>
                </div>
                <button className='btn rounded-full text-white font-bold 
                        bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:shadow-l hover:-translate-y-1 group' onClick={() => handleRemoveBtn(product)}>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default SelectedCard;