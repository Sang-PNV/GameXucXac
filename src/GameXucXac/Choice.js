import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Choice extends Component {
  render() {
    let {choice} = this.props
    return (
      <div className='display-4'>
         <p>Bạn chọn : <span className='text-primary'>{choice.banChon}</span></p>
         <p>Số bàn thắng : <span className='text-info'>{choice.soBanThang}</span></p>
         <p>Tổng số bàn chơi : <span className='text-success'>{choice.tongSoBanChoi}</span></p>
      </div>
      
    )
  }
}
let mapStateToProps = (state) => {
 return { choice : state.xucXacReducer }
}
export default connect(mapStateToProps)(Choice)