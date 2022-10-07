import React, { Component } from 'react'

export default class FormBook extends Component {
  render() {
    return (
        <div>
        <span className='body_title font-weight-bold text-left d-block py-3'>Fill The Required Details Below And Select Your Seats</span>
        <div className="form-group body__input__fields">
            <div className="row">
                <div className="col-md-8">
                    <label className='inputw d-block text-left' htmlFor="name_input">Name: <span className='text-danger'>*</span></label>
                    <input onChange={(event) => {
                        let { name, value } = event.target;
                        this.props.handleChange(name, value);
                    }} id='name_input' name='userName' type="text" className="form-control" />
                </div>
                <div className="col-md-4">
                    <label className='inputw d-block text-left' htmlFor="number_seat_input">Number of Seats: <span className='text-danger'>*</span></label>
                    <input onChange={(event) => {
                        let {name,value} = event.target;
                        this.props.handleChange(name, value);
                    }} id='number_seat_input' name='numberSeat' type="number" min={1} className="form-control" />
                </div>
            </div>
        </div>
        <div className="select_btn py-3">
            <button onClick={() => {
                this.props.inputSeat()
            }} className='btn btn-primary text-left d-block'>Start Selecting</button>
        </div>
    </div>
    )
  }
}
