import React, { Component } from 'react'
import ShoeList from './ShoeList';
import Modal from './Modal';
import data from "../../data.json"

export default class Shoe extends Component {
    state = { shoe: "shoe" };
    getDetail = (id) => {
        this.setState({
            shoe: data.find((index) => {
                return id === index.id;
            }),
        });
    }
  render() {
    return (
        <div className="container">
        <h2 className="text-center" style={{background: 'yellow'}}>Shoe Shop</h2>
        <ShoeList getDetail={this.getDetail} data={data} />
        <Modal shoeDetail={this.state.shoe} />
    </div>
    )
  }
}
