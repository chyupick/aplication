import React, {Component} from 'react';
import {ReactDom} from 'react-dom';

import ProductsContainer from 'productsContainer';
import products from 'products.json';
import load from '../utils/load';

products = require('./src/products.json');

load('products.json')
    .then(data => {});

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            active: 0,
            searchTerm: ''
        };

        this.loadData();
    }

    loadData() {
        load(this.props.data).then(products => {
            this.setState({
//                data: JSON.parse(products)
                data: goods.product
            });
        });
    }

    updateData(config) {
        this.setState(config);
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <ProductsContainer items={this.state.data} />
                </div>
            </div>
        );
    }
}