
import { FiShoppingCart } from 'react-icons/fi';
import SelectedCard from "../Cards/SelectedCard"
import { toast } from 'react-toastify';

const SelectedProduct = ({ selectedProducts, setSelectedProducts, setCount }) => {


    const handleRemoveBtn = (product) => {

        const deleteItem = selectedProducts.filter(selectedProduct => selectedProduct.name !== product.name);
        setSelectedProducts(deleteItem);


        const removeCount = Number(product.count || 1);
        setCount(prev => Math.max(0, Number(prev || 0) - removeCount));


        toast.error(`${product.name} removed from cart`);

    };


    const totalPrice = selectedProducts.reduce((sum, product) => {
        return sum + Number(product.price || 0);
    }, 0);

    const handleProceedToCheckout = () => {
        if (selectedProducts.length === 0) return;

        toast.success("Product Purchased successfully!");
        

        setSelectedProducts([]);
        setCount(0);
    };


    return (

        <div className='space-y-5 border-3 border-[#62738241] rounded-2xl p-6 mb-28'>
            <h3 className='font-bold text-3xl text-left'>Your Cart</h3>

            {
                selectedProducts.length === 0 ? (
                    <div className="h-[350px] flex items-center justify-center flex-col gap-4">
                        <FiShoppingCart size={100} className="text-[#62738273]" />
                        <p className="text-[#627382] font-medium text-xl">
                            Your Cart is Empty
                        </p>
                    </div>
                ) : (
                    <>
                        {
                            selectedProducts.map((product, index) => (
                                <SelectedCard
                                    key={index}
                                    product={product}
                                    handleRemoveBtn={handleRemoveBtn} />
                            ))}


                        <div className="mt-8 pt-6 border-t border-[#62738241]">
                            <div className="flex justify-between mb-6">
                                <div className="text-[#627382] text-xl">
                                    Total
                                </div>
                                <div className="text-2xl font-bold">
                                    ${totalPrice}
                                </div>
                            </div>

                            <button
                                onClick={handleProceedToCheckout}
                                className="btn w-full h-14 rounded-full text-white font-bold 
                                         bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:shadow-l hover:-translate-y-1 group"
                            >
                                Proceed To Checkout
                            </button>
                        </div>
                    </>
                )}


        </div>
    );
};

export default SelectedProduct;