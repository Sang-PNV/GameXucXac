import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Choice extends Component {
  render() {
    let {choice} = this.props
    return (
      <div className='display-4'>
         <p>Bạn chọn : <span className='text-danger'>{choice.banChon}</span></p>
         <p>Tổng số bàn chơi : <span className='text-warning'>{choice.tongSoBanChoi}</span></p>
         <p>Số bàn thắng : <span className='text-primary'>{choice.soBanThang}</span></p>
      </div>
      
    )
  }
}
let mapStateToProps = (state) => {
 return { choice : state.xucXacReducer }
}
export default connect(mapStateToProps)(Choice)