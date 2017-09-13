import React, {Component} from 'react';
import ReactDom from 'react-dom';

export default class App extends Component{
    constructor(props) {
        super(props);
    }

    var products = JSON.parse(fs.readFileSync('../products.json'));

    render() {

    }
}