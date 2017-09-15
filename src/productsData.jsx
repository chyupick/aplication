import React from 'react';

export default ({product, update, index}) => {
    return (
        <tr onClick={() => update({ active: index })}>
            <td><img src='#' className='product-image' /></td>
            <td>{product.productName}</td>
            <td>{product.variant}</td>
            <td>{product.brand}</td>
            <td>{product.price}</td>
        </tr>
    );
};