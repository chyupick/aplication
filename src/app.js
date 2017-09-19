import React, {Component} from 'react';
import load from "../utils/load";

import ProductsContainer from './productsContainer';
import Sidebar from './sidebar';
import Toolbar from './toolbar';
import SearchBar from './searchBar';
// import ActiveProduct from './activeProduct';
// import ProductsList from './productsList';
//import Pagination from "./pagination";
import Page from "./page";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataProd: [],
            dataBar: [],
            //data: [],
            sumPages: 0,
            total: 0
            //current: 1
            //visiblePage: 3
        };
        this.loadData();
    }

    loadData(page = 0, pageSize = 10) {
        fetch('/src/products.json')
            .then(response => {
                return (response.json());
            })
            .then(goods => {
                const initialData = goods.products.slice(page*pageSize, pageSize);
                const total = goods.products.length;
                const sumPages = Math.ceil(total/pageSize);
                //const current = page;
                this.setState({
                    dataProd: initialData,
                    dataBar: goods.products,
                    total: total,
                    //current: current,
                    sumPages: sumPages
                });
                // load(this.props.data).then(products => {
                //     this.initialProducts = JSON.parse(products);
                //     this.setState({
                //         data: this.initialProducts
                //     });
                // });
            });
    }


    render() {
        console.log(this.state.dataBar);
        return (
            <div>
                <div className='container'>

                    <div className='row'>
                        <div className='col-sm-12'>
                            <SearchBar
                                term={this.state.term}
                                data={this.state.dataBar}
                                update={this.updateData.bind(this)}
                            />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-sm-12'>
                            <ProductsContainer items={this.state.dataProd} />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-sm-12'>
                            <Sidebar items={this.state.dataBar}/>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-sm-12'>
                            <Toolbar initialData={this.initialData} data={this.state.data} update={this.updateData.bind(this)} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <Page items={this.state.sumPages} onClick={this.handlePageChanged} />
                        </div>
                    </div>

                    {/*<div className="row">*/}
                        {/*<div className="col-sm-4 col-md-3 col-lg-2">*/}
                            {/*<ActiveProduct data={this.state.data} active={this.state.active} />*/}
                        {/*</div>*/}
                        {/*<div className="col-sm-8 col-md-9 col-lg-10">*/}
                            {/*<ProductsList data={this.state.data} update={this.updateData.bind(this)} />*/}
                        {/*</div>*/}
                    {/*</div>*/}

                </div>
            </div>
        );
    }
    updateData(config) {
        this.setState(config);
    }

}