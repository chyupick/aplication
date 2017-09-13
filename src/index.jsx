import React, {Component} from 'react';
import ReactDom from 'react-dom';

import products from 'products.json';
import load from '../utils/load';

load('products.json')
    .then(data => {});

export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            searchTerm: '',
            active: 0
        };
        this.loadData();
    }

    products = JSON.parse(fs.readFileSync('../products.json'));

    loadData() {
        load(this.props.data).then(products => {
            this.setState({
                data: JSON.parse(products)
            });
        });
    }

    render() {
        <App data='products.json' />

        return (
            photoList = this.products.map(item => <span key={products.photo_list[item].variant}>
                {products.photo_list[item].large}
                {products.photo_list[item].thumb}
                {products.photo_list[item].lowREs}
                {products.photo_list[item].main}
                {products.photo_list[item].hiRes}</span>)
    )

    }
}