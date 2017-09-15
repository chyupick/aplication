import React, {Component} from 'react';

export default class Sidebar extends Component {
    render() {
        let filterCategories = new Set (this.props.items.map((item, index) => item.bsr_category));
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