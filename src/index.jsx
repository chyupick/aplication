import React, {Component} from 'react';
import ReactDom from 'react-dom';

import data from 'products.json';

export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            searchTerm: '',
            active: 0
        };
    }

    products = JSON.parse(fs.readFileSync('../products.json'));

    loadData() {
        this.setState({})
    }

    render() {
        return (
            const photoList = this.products.map(item => <span key={products.photo_list[item].variant}>
                {products.photo_list[item].large}
                {products.photo_list[item].thumb}
                {products.photo_list[item].lowREs}
                {products.photo_list[item].main}</span>)
    )

    }
}