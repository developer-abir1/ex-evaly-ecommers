import React from 'react';
import data from '../../../uilits/data';
import ProductsItems from './ProductsItems';
import './products.css'
const Products = () => {
    return (
        <section className='container'>
            <h4 className=' product-title  w-25   px-3 mt-4'>Hot Products</h4>
            <div className='row row-cols-1   row-cols-lg-4 row-cols-md-4 row-cols-sm-2 g-4'>
            {
                data.products.map(prod => <ProductsItems prod={prod} key={prod.id} />)
            }
          
            </div>
        <div className='d-flex justify-content-center py-5'>
                  <button className=' btn  btn-warning fw-semibold'>See ALL Product</button>
        </div>
        </section>
    );
};

export default Products;