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
            total: 0,
            sizePage: 10
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
                //const sizePage = this.state.sizePage;
                const currentPage = goods.products.slice(0, this.state.sizePage);
                this.setState({
                    dataProd: initialData,
                    dataBar: goods.products,
                    total: total,
                    currentPage: currentPage,
                    sumPages: sumPages
                });
                this.newPage();
                //this.getPaging();
                // load(this.props.data).then(products => {
                //     this.initialProducts = JSON.parse(products);
                //     this.setState({
                //         data: this.initialProducts
                //     });
                // });
            });
    }

    // getPaging() {
    //     const sizePage = this.state.sizePage;
    //     const total = this.state.total;
    //     const sumPages = Math.ceil(total/sizePage);
    //     this.setState({
    //         //dataProd: initialData,
    //         //dataBar: goods.products,
    //         //total: total,
    //         sumPages: sumPages
    //     });
    // }

    newPage(itemPage, current) {
        current = {
            currentPage: this.state.dataBar.slice(itemPage*this.state.sizePage - this.state.sizePage,
                itemPage*this.state.sizePage)};
                console.log(current);
    }

    onChangePage(event) {
        let itemPage = Number(event.target.id);
        this.newPage(itemPage);
    }


    render() {
        console.log(this.state.dataBar);
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
                            <Page items={this.state.sumPages} onClick={this.onChangePage} />
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