import React, { Component } from 'react'
import { connect } from 'react-redux'

 class XucXac extends Component {
    renderXucXac = () => {
      return  this.props.xucXac.xiNgau.map((item,index)=>{
         return   <img key={index} className='mx-2' style={{width :"70px"}} src={item.url} alt="" />
        })
      }
      render() {
         let {xiNgau} = this.props.xucXac

      
    return (
      <div >
        {/* <img className='mx-2' style={{width :"70px"}} src={xiNgau.url1} alt="" />
        <img className='mx-2' style={{width :"70px"}} src={xiNgau.url2} alt="" />
        <img className='mx-2' style={{width :"70px"}} src={xiNgau.url3} alt="" /> */}
        {this.renderXucXac()}
      </div>
    )
  }
}
let mapStateToProps = (state) => {
 return{ xucXac : state.xucXacReducer   }
}
export default connect(mapStateToProps)(XucXac)