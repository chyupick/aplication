import React, {Component} from 'react';
import {ReactDom} from 'react-dom';

import products from 'products.json';
import load from '../utils/load';

products = require('./src/products.json');

load('products.json')
    .then(data => {});

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            active: 0,
            term: ''
        };

        this.loadData();
    }

    loadData() {
        load(this.props.data).then(products => {
            this.setState({
                data: JSON.parse(products)
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

                </div>
            </div>
        )
    }
}