import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        let {shoeDetail} = this.props;
        let {name, alias, description, image, price} = shoeDetail;
        return (
            <div>
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header py-0">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <h2 className='text-center' style={{background: 'yellow'}}>Shoe Detail</h2>
                            <div className="modal-body py-0">
                                <div className="row align-items-center">
                                    <div className="col-6" style={{background: 'url(https://static.vecteezy.com/system/resources/previews/004/672/849/original/abstract-curve-soft-brown-layer-luxury-background-with-golden-line-curve-on-dark-blue-background-free-vector.jpg)'}}>
                                        <img className="img-fluid" src={image} alt=""/>
                                    </div>
                                    <div className="col-6">
                                        <h2>{name}</h2>
                                        <p style={{color: "red", fontSize: "20px",}}>
                                            {price}$
                                        </p>
                                        <p style={{ fontWeight: 500, fontSize: '19px' }}>DETAIL:      
                                            {description}
                                        </p>
                                        <p
                                            style={{ fontSize: "22px" }}
                                            className="mt-5"
                                        >
                                            <span style={{ fontWeight: 600 }}>
                                                Note:{" "}
                                            </span>
                                            {alias}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
