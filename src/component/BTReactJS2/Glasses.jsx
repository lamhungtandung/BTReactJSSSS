import React, { Component } from 'react'
import data from "../dataGlasses.json"
import "../index2.css"
export default class Glasses extends Component {

    state = {
        price: 30, name: "GUCCI G8850U", url: "./glassesImage/v1.png", desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    };

    glassList = () => {
        return data.map((glass) => {
            return (
                <div className="row py-2">
                    <button className='clickGlass'
                        onClick={() => {
                            this.changeGlass(glass.id);
                        }}>
                        <img className="img-fluid" src={glass.url} alt="" />
                    </button>
                </div>
            );
        });
    };

    changeGlass = (id) => {
        let glass2 = data.find((glass) => {
            return glass.id === id;
        });

        this.setState(glass2);
    };

    render() {
        return (
            <div className="GlassBD container">
                <div className="glass_avt py-5">
                    <div className="glass_service">
                        <img className="img-fluid" src="./glassesImage/model.jpg" alt="" />
                        <div className="glass_img">
                            <img
                                className="img-fluid"
                                src={this.state.url}
                                alt=""
                            />
                        </div>
                        <div className="glass_content">
                            <h2>{this.state.name}</h2>
                            <span>${this.state.price}</span>
                            <p>{this.state.desc}</p>
                        </div>
                    </div>
                    <img className="img-fluid" src="./glassesImage/model.jpg" alt="" />
                </div>
                <div className="glass_list">
                        <div className="row glassItem">{this.glassList()}</div>
                    </div>
            </div>
        )
    }
}
