import React, { use } from 'react';
import AvaProducts from '../AvaProducts/AvaProducts';

const Products = ({ProductsPromise}) => {
    const products = use(ProductsPromise);

    return (
        <div className='max-w-[1200px] mx-auto mt-28'>
            Products

            <AvaProducts products={products}/>
        </div>
    );
};

export default Products;