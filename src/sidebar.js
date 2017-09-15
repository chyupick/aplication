import React, {Component} from 'react';

import ProductsContainer from './productsContainer';

export default class Sidebar extends Component {
    render() {
        let filterCategories = new Tools (this.props.items.map((item, index) => item.bsr_category));
        let arrayCategories = [...filterCategories];

        return (
            <div>
                <div className='sidebar'>
                    <ul>
                        {arrayCategories.map((item, index) =>
                            <li key={index} className="category-item">{item}</li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}