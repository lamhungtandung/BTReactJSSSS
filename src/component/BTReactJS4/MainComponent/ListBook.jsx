import React, { Component } from 'react'

export default class ListBook extends Component {

    renderSeatList = () => {
        return this.props.ListBook.map((seatRow, index) => {
            let {hang} = seatRow;
            return <table key={`table-${index}`} className="table table-borderless mb-0 seat__table">
                <tbody>
                    <tr className='seat__row'>
                        <td className='rowStyle text-left'>{hang}</td>
                        {seatRow.danhSachGhe.map((seatName, index) => {
                            return <td key={`seat-${index}`}>
                                <span onClick={() => {
                                    this.props.addSeat(seatName)
                                }} className='seat'
                                    style={{ background: `${this.props.checkItem(seatName.soGhe)}` }} >
                                    {seatName.soGhe}
                                </span>
                            </td>
                        })}
                    </tr>
                </tbody>
            </table>
        })
    }

    render() {
        return (
            <div>
                <div className="label_seat d-block text-left">
                    <span className='state_seat selected_seat'>Selected Seat</span>
                    <span className='state_seat reserved_seat'>Reserved Seat</span>
                    <span className='state_seat empty_seat'>Empty Seat</span>
                </div>

                <div className="mess" style={{ display: `${this.props.warning}` }}>
                    <span className='mess_title d-block w-50 mx-auto my-5'>Please Select your Seats NOW!</span>
                </div>
                <div className="listSeat">
                    {this.renderSeatList()}
                </div>
                <div className="screen_Seat">
                    <span className='screen_label'>screen this way</span>
                </div>
                <div className="confirm py-4">
                    <button onClick={() => {
                        this.props.okSeat()
                    }} className='btn btn-success'>Confirm Selection</button>
                </div>
            </div>

        )
    }
}
