import React, { Component } from 'react';

export default class ProductsContainer extends Component {

    render() {
        return (
            <div className='products-main'>
                <div className='goods'>
                    {this.props.items.map((item, index) =>
                        <div key={index} className='goods-item'>
                            <h3>{item.asin}</h3>
                            <img src={item.img} alt="picture" width='60px' />
                            <p>{item.price}</p>
                        </div>
                    )}
            </div>
            </div>
        );
    }

}