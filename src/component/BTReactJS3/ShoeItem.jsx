import React, { Component } from 'react'

export default class ShoeItem extends Component {
  render() {
        let {shoe, getDetail} = this.props;
        let {id, name, price, image} = shoe;
        return (
            <div className="col-4 pt-4">
                <div className="card">
                    <img className="card-img-top" src={image} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">{price}$</p>
                        <button
                            onClick={() => {
                                getDetail(id);
                            }} data-toggle="modal" data-target="#modelId" className="btn" style={{background: 'yellow', fontWeight: 600}}>
                            Review
                        </button>
                    </div>
                </div>
            </div>
    )
  }
}
