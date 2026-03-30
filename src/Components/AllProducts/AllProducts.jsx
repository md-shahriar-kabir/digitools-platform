import Card from '../Cards/Card'

const AllProducts = ({ products }) => {

    return (
        <div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    products.map((product) => {
                        return <Card product = {product}/>
                    })
                }
            </div>

        </div>
    );
};

export default AllProducts;