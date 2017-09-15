import React from 'react';
import productsData from './productsData';

export default ({data, update}) => {

    const products = data.map((product, index) => {
        return (<productsData product={product} index={index} update={update} />);
    });

    return (
        <table className='products-list table table-striped'>
            <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
                {products}
            </tbody>
        </table>
    );

};
