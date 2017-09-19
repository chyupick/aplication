import React, {Component} from 'react';

export default class Page extends Component {
    constructor(props) {
        super(props);
    }

    handlePageChanged() {
        let str = [];
        for(let i = 0; i < this.props.items; i++) {
            str.push(i + 1);
        }
        // this.setState({
        //     current: newPage
        // });
        return (str);
    }

    render() {
        return(
            <div className='pagination'>
                <div className='pages'>
                    {
                        this.handlePageChanged().map((item, index) =>
                            (<div key={index}
                                  className='page-item'
                                  onClick={this.handlePageChanged.bind(this)}>
                                {item}
                            </div>))
                    }
                </div>
            </div>
        );
    }
}