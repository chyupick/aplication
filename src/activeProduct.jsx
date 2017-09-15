import React from 'react';

export default ({ data, active }) => {
    if (!data || !data[active]) { return <h3>Nothing found :(</h3>; }

    const product = data[active];

    return (
        <div className="thumbnail">
            <img src='#' />

            <div className="thumbnail-caption">
                <h3>{product.name}</h3>
                <table className="product-info table table-responsive">
                    <tbody>
                    <tr>
                        <td>Name:</td>
                        <td>{product.productName}</td>
                    </tr>
                    <tr>
                        <td>Product brand:</td>
                        <td>{product.brand}</td>
                    </tr>
                    <tr>
                        <td>Price:</td>
                        <td>{product.price}</td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
};