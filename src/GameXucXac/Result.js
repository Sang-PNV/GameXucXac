import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Result extends Component {
  render() {
    let {result} = this.props
    return (
      <div className='resultGame display-4 mt-4'>
        <p className='ban_chon result'>Kết Quả : <span className='text-danger'>{result.result} nút</span>  <span className='text-warning'>{result.taiXiu}</span></p>
      </div>
    )
  }
}
let mapStateToProps= (state) => {
 return {
    result : state.xucXacReducer
 }
}
export default connect(mapStateToProps)(Result)