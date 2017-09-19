import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    dataSearch(e, update){
        const value = e.target.value.toLowerCase();
        let prodName = this.props.data.map((item, index) => item.name);
        let data = [...prodName];
        const filter = data.filter(product => {
             return (product.toLowerCase().includes(value));
         });

        update = {
             data: filter,
             active: 0,
             term: value
         };
        console.log(update);
    }


    render() {

        return (
            <div className='searchbar form-group'>
                <input value={this.props.term}
                       type='search'
                       className='form-control'
                       placeholder='Search products by name...'
                       onChange={this.dataSearch.bind(this)}
                />
            </div>
        );
    }
}
// ({term, data, update}) => {
//
//     const dataSearch = e => {
//          let filterByName = new Set (this.props.data.map((item, index) => item.name));
//         //let nameArray = [...filterByName];
//          data = [...filterByName];
//         const value = e.target.value.toLowerCase();
//         const filter = data.filter(product => {
//             return (product.toLowerCase().includes(value));
//         });
//
//         update({
//             data: filter,
//             active: 0,
//             term: value
//         });
//
//     };
//         return (
//             <div className='searchbar form-group'>
//                 <input
//                     value={term}
//                     type='search'
//                     className='form-control'
//                     placeholder='Search products by name...'
//                     onChange={dataSearch.bind(this)}
//                 />
//             </div>
//         );
// };