import React, {Component} from 'react';

import ProductsContainer from './productsContainer';
import Sidebar from './sidebar';
import Toolbar from './toolbar';
import SearchBar from './searchBar';
import Page from "./page";
//import productsList from "./productsList";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataProd: [],
            dataBar: [],
            //data: [],
            //currentPage: [],
            sumPages: 0,
            total: 0,
            pageSize: 10
        };
        this.loadData();
    }

    loadData(page = 0, pageSize = 9) {
        fetch('/src/products.json')
            .then(response => {
                return (response.json());
            })
            .then(goods => {
                const initialData = goods.products.slice(page*pageSize, pageSize);
                const total = goods.products.length;
                const sumPages = Math.ceil(total/pageSize);
                const currentPage = goods.products.slice(page, this.state.pageSize);
                const currentProducts = goods.products.slice(currentPage, this.state.dataProd);
                this.setState({
                    dataProd: initialData,
                    dataBar: goods.products,
                    total: total,
                    currentPage: currentPage,
                    currentProducts: currentProducts,
                    sumPages: sumPages
                });
                this.newPage();
            });
    }
    newPage(itemPage, itemProducts, update) {
        // let itemProducts = [];
        update = {
            currentPage: this.state.dataBar.slice(itemPage*this.state.pageSize - this.state.pageSize,
                itemPage*this.state.pageSize),
            currentProducts: this.state.dataBar.slice(itemProducts*this.state.dataProd - this.state.dataProd,
                itemProducts*this.state.dataProd)
            // dataProd: this.state.dataBar.slice(itemProducts[itemProduct*this.state.dataProd] - this.state.dataProd,
            //     itemProducts[itemProduct*this.state.dataProd])
        };
                console.log('current: ' + update);
    }

    onChangePage(event) {
        let itemPage = Number(event.target.id);
        let newProducts = this.state.dataBar.map((item, index) => item.products);
        let itemProducts = Array([...newProducts*this.state.dataProd, event], event.target.newPage);
        //let itemProduct =

        // const value = event.target.dataProd;
        // let itemProducts = this.state.dataProd.map((item, index) => item.products);
        // let newProducts = [...itemProducts];
        // const filter = newProducts.filter(products => {
        //     products(value);
        //     return (products(value));
        //
        // });
        this.newPage(itemPage, itemProducts);
        console.log('page: ' + itemPage, 'products: ' + itemProducts);
    }


    render() {

        return (
            <div>
                <div className='container'>

                    <div className='row'>
                        <div className='col-sm-12'>
                            <SearchBar
                                //items={this.state.dataProd}
                                term={this.state.term}
                                data={this.state.dataBar}
                                update={this.updateData.bind(this)}
                            />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-sm-12'>
                            <ProductsContainer items={this.state.dataProd}
                                               changePages={this.onChangePage.bind(this)} />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-sm-12'>
                            <Sidebar items={this.state.dataBar}/>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-sm-12'>
                            <Toolbar initialData={this.initialData}
                                     data={this.state.data}
                                     update={this.updateData.bind(this)} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <Page items={this.state.sumPages}
                                  onClickChange={this.onChangePage.bind(this)} />
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