
import Card from '../Cards/Card'

const AllProducts =  ({ products, setCount, count, selectedProducts, setSelectedProducts }) => {

    return (
        <div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    products.map((product, ind) => {
                        return <Card key={ind} product={product} setCount={setCount} count={count} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}/>;
                    })
                }
            </div>

        </div>
    );
};

export default AllProducts;