import React from 'react';
import { Link } from 'react-router-dom';

const ProductsItems = (props) => {
    const {name , image , price , discription , id} = props.prod
    return (
         <Link  className=' text-decoration-none text-black' to={`/product/${id}`}>
       <div class="col">
        <div class="card">
         <img src={image} class="card-img-top  " width={100} alt="..." />
        <div class="card-body">
        <h5 class="card-title"> {name}</h5>
        <p class="card-text text-center fw-bold text-bg-danger">$ {price}</p>
        <p class="card-text"> {discription}</p>
        
        
        
        </div>
        </div>
        </div>
         </Link>
    );
};

export default ProductsItems;