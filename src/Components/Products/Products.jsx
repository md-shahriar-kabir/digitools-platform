import React, { use } from 'react';
import AllProducts from '../AllProducts/AllProducts';

const Products = ({ProductsPromise}) => {
    const products = use(ProductsPromise);

    return (
        <div className='max-w-[1200px] px-4 mx-auto mt-28'>
            Products

            <AllProducts products={products}/>
        </div>
    );
};

export default Products;