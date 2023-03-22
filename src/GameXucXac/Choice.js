import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Choice extends Component {
  render() {
    let {choice} = this.props
    return (
      <div className=''>
         <p className='ban_chon'>Bạn chọn : <span className='text-danger ban_chon'>{choice.banChon}</span></p>
         <p className='ban_chon'>Tổng số bàn chơi : <span className='text-warning ban_chon'>{choice.tongSoBanChoi}</span></p>
         <p className='ban_chon'>Số bàn thắng : <span className='text-primary ban_chon'>{choice.soBanThang}</span></p>
      </div>
      
    )
  }
}
let mapStateToProps = (state) => {
 return { choice : state.xucXacReducer }
}
export default connect(mapStateToProps)(Choice)