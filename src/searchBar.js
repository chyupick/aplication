import React from 'react';

export default ({term, data, update}) => {

    const dataSearch = e => {
        const value = e.target.value.toLowerCase();
        const filter = data.filter(products => {
            return (products.name.toLowerCase().includes(value));
        });

        update({
            data: filter,
            active: 0,
            term: value
        });

    };
        return (
            <div className='searchbar form-group'>
                <input
                    value={term}
                    type='search'
                    className='form-control'
                    placeholder='Search products by name...'
                    onChange={dataSearch}
                />
            </div>
        );
};