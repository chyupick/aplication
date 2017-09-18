import React, {Component} from 'react';

import Page from './page';

export default class Pagination extends Component {
    constructor(props) {
        super(props);
    }


    handlePageChanged(newPage) {
        this.setState({
            current: newPage
        });
    }



    render() {
        return(
            <div className='pagination'>
                <Page total={this.props.total}
                       current={this.props.current}
                       visiblePages={this.props.visiblePage}
                       onPageChanged={this.handlePageChanged.bind(this)} />
            </div>
        );
    }
}