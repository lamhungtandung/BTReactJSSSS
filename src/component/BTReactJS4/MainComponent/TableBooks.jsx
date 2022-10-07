import React, { Component } from 'react'

export default class TableBooks extends Component {
  renderResult = () => {
    let { userName, seatNumber, arrSeat, approve } = this.props;
    if (approve && arrSeat.length > 0) {
      return <>
        <tr>
          <td>{userName}</td>
          <td>{seatNumber}</td>
          <td colSpan={2}>
            {arrSeat.map((item, index) => {
              return <ul key={`item-${index}`} className='text-center px-1 mb-0'>
                <li>{`Name: ${item.soGhe}`}</li>
                <li>{`Price: ${(item.gia).toLocaleString()}`}</li>
              </ul>
            })}
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <h4>Total price: </h4>
          </td>
          <td>{(this.props.totalPrice()).toLocaleString()}</td>
        </tr>
      </>
    }
  }
  render() {
    return (
      <div>
        <div className="body_table">
          <table className="table bg-dark text-white table-bordered">
            <thead>
              <tr>
                <th className='w-25'>Name</th>
                <th className='w-25'>Number of Seats</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {this.renderResult()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
