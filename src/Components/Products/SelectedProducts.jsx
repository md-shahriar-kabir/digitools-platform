
import { FiShoppingCart } from 'react-icons/fi';
import SelectedCard from "../Cards/SelectedCard"

const SelectedProduct = ({ selectedProducts, setSelectedProducts, setCount, count }) => {


    const handleRemoveBtn = (product) => {

        const deleteItem = selectedProducts.filter(selectedProduct => selectedProduct.name !== product.name)
        setSelectedProducts(deleteItem);

        setCount(count - product.count);
    }

    return (
        <div>

            <div className='space-y-5 border-3 border-[#62738241] rounded-2xl p-6 mb-28'>
                <h3 className='font-bold text-3xl text-left'>Your Cart</h3>
                {
                    selectedProducts.length === 0 ?
                        <div className='h-[350px] flex items-center justify-center flex-col gap-4'>
                            <FiShoppingCart size={100} className='text-[#62738273]' />
                            <p className='text-[#627382] font-medium'>Your Cart is Empty</p>
                        </div>
                        : selectedProducts.map((product, id) => {
                            return <SelectedCard key={id} product={product} handleRemoveBtn={handleRemoveBtn} />
                        })
                }
            </div>


        </div>
    );
};

export default SelectedProduct;