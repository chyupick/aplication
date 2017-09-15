import React, { Component } from 'react';

export default class ProductsContainer extends Component {

    render() {
        return (
            <div className='products-main'>
                <input type='search'/>
                <div className='goods'>
                    {this.props.items.map((item, index) =>
                        <div key={index} className='goods-item'>
                            <h3>{item.asign}</h3>
                            <img src='#'/>
                            <p>{item.price}</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }

}