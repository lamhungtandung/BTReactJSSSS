import React, { Component } from 'react'
import '../../stylecss/footerStyle.css'
export default class FooterComponent extends Component {
  render() {
    return (
        <div className='footer'>
          <div className="footer_content">
            <span className='title'>© 2020 Movie Seat Selection . All Rights Reserved</span>
          </div>
        </div>
      )
  }
}
