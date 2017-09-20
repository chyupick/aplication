import React, { Component } from 'react';

export default class ProductsContainer extends Component {

    render() {
        return (
            <div className='products-main'>
                <div className='goods'>
                    {this.props.items.map((item, index) =>
                        <div key={index} className='goods-item'>
                            <p>{'cost: ' + item.price + ' $'}</p>
                            <img src={item.img} alt="picture" width='60px' />
                            <h3>{item.name}</h3>
                        </div>
                    )}
            </div>
            </div>
        );
    }

}