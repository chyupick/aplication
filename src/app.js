import React, {Component} from 'react';

import ProductsContainer from './productsContainer';
import Sidebar from './sidebar';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            dataProd: [],
            dataBar: []
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
                    dataProd: initialData,
                    dataBar: goods.products
                });
            });
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <ProductsContainer items={this.state.dataProd} />
                    <Sidebar items={this.state.dataBar}/>
                </div>
            </div>
        );
    }

    updateData(config) {
        this.setState(config);
    }
}