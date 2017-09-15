import React, {Component} from 'react';

import ProductsContainer from './productsContainer';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };

        this.loadData();
    }

    loadData(page = 0, pageSize = 10) {
        fetch('/src/products.json')
            .then(response => {
                console.log(response.json);
                return (response.json());
            })
            .then(goods => {
                const initialData = goods.products.slice(page*pageSize, pageSize);
                this.setState({
                    data: initialData
                });
            });
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

    updateData(config) {
        this.setState(config);
    }
}