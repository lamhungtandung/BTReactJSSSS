import React, { Component } from 'react'
import ShoeItem from './ShoeItem';
export default class ShoeList extends Component {
    renderShoe = () => {
        return this.props.data.map((shoe) => {
            return (
                <ShoeItem getDetail={this.props.getDetail} key={`shoe-${shoe.id}`} shoe={shoe}/>
            );
        });
    };
  render() {
    return <div className="row">{this.renderShoe()}</div>;
  }
}
