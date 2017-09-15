import React, { Component } from 'react';

class ProductsContainer extends Component {

    render() {
        return (
            <div className='products-main'>
                <input type="text"/>
                <div className='goods'>
                    {this.props.items.map((item, index) =>
                        <div key={index} className='goods-item'>
                            <h3>{item.asin}</h3>
                            <img src='#'/>
                            <p>{item.price}</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }

}

export default ProdBlock;