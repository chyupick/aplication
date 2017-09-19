import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Page from './page';

Page.propTypes = {
    current: PropTypes.number.isRequired,
    onPageChanged: PropTypes.func,
};

export default class Pagination extends Component {
    constructor(props) {
        super(props);
    }

    handlePageChanged(num) {
        const handler = this.props.onPageChanged;
        if (handler) handler(num);
        // this.setState({
        //     current: newPage
        // });
    }

    renderPages(pair) {
        return (range(pair[0], pair[1]).map((num, index) => {
            const current = num - TITLE_SHIFT;
            const onClick = this.handlePageChanged.bind(this, current);
            const isActive = (this.props.current === current);

            return (
                <Page
                        key={index}
                        index={index}
                        isActive={isActive}
                        className="btn-numbered-page"
                        onClick={onClick}
                        onPageChanged = {this.handlePageChanged}
                    >{num}</Page>)
        }));
    }

    render() {
        return(

            <div className='pagination'>
                <div className='pages'>
                    {this.renderPages(this)}
                </div>
            </div>
        );
            {/*<div className='pagination'>*/}
                {/*{*/}
                    {/*this.handlePageChanged().map((item, index) =>*/}
                    {/*(<Page key={index} className='page-item'>*/}
                        {/*{item}*/}
                    {/*</Page>))*/}
                {/*}*/}

                {/*<Page total={this.props.total}*/}
                      {/*current={this.props.current}*/}
                      {/*visiblePages={this.props.visiblePage}*/}
                      {/*onPageChanged={this.props.handlePageChanged} />*/}

            {/*</div>*/}

    }
}
function range() {
    let str = [];
    for(let i = 0; i < this.props.items; i++) {
        str.push(i + 1);
    }

    return (str);
}