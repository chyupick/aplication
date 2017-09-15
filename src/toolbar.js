import React, { Component } from 'react';

export default class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.sorted = {
            productName: true,
            variant: true,
            brand: true,
            price: true
        };
    }

    sort(type) {
        const {update, data} = this.props;
        const isSorted = this.sorted[type];
        let direction = isSorted ? 1 : -1;
        const sorted = [].slice.call(data).sort((a, b) => {
            if (a[type] === b[type]) { return 0; }
            return a[type] > b[type] ? direction : direction * -1;
        });

        this.sorted[type] = !isSorted;

        update({
            data: sorted,
            active: 0
        });
    }
    reset() {
        this.props.update({
            data: this.props.initialData,
            term: '',
            active: 0
        });
    }

    render() {
        return (
            <div className='toolbar'>
                <button className='btn btn-default' onClick={() => this.sort('productName')}>
                    <i className='fa fa-sort-by-name'></i>  Sort by name
                </button>
                <button className='btn btn-default' onClick={() => this.sort('variant')}>
                    <i className='fa fa-sort-by-variant'></i>  Sort by variant
                </button>
                <button className='btn btn-default' onClick={() => this.sort('brand')}>
                    <i className='fa fa-sort-by-brand'></i>  Sort by brand
                </button>
                <button className='btn btn-default' onClick={() => this.sort('price')}>
                    <i className='fa fa-sort-by-price'></i>  Sort by price
                </button>
                <button className='btn btn-reset' onClick={this.reset.bind(this)}>
                    <i className='fa fa-reset'></i>  Reset
                </button>
            </div>
        );
    }
}