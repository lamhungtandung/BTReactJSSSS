import React, { Component } from 'react'
import FooterComponent from './FooterComponent/FooterComponent'
import HeaderBook from './HeaderComponent/HeaderBook'
import MainComponent from './MainComponent/MainComponent'
export default class BookSeat extends Component {
  render() {
    return (
      <>
      <HeaderBook/>
      <MainComponent/>
      <FooterComponent/>
      </>
      
    )
  }
}
