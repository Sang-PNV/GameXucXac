import { PLAY, TAI, XIU } from "./constant/xucXacConstant"

const initialState = {
xiNgau :  [
          {ma:1, url : "./GameImg/1.png"},
          {ma:2, url : "./GameImg/2.png"},
          {ma:3, url : "./GameImg/3.png"},
],
banChon : "",
soBanThang : 0,
tongSoBanChoi : 0,
result: 6,
taiXiu: "Xĩu",
}

export default (state = initialState, action) => {
  switch (action.type) {

  case TAI: { 
    return {...state, banChon : "Tài"}
   }

  case XIU: { 
    return {...state, banChon : "Xĩu"}
   }

   case PLAY:{
    if(state.banChon == ""){
      alert('Vui Lòng chọn tài hoặc xĩu')
    } else{
    let mangXucXacNew = []
    for(let i = 0 ; i <3 ; i++){
      let soNgauNhien = Math.floor(Math.random()*6)+1
      mangXucXacNew.push(soNgauNhien)
    }
    let result = mangXucXacNew.reduce((tong,item,index)=>{
      return tong += item
    },0)
    let mangXucXacNgauNhien = mangXucXacNew.map((item,index)=>{
      return {ma:item , url : `./GameImg/${item}.png`}
    })
    let taiXiu = ""
    if (result <= 10){
      taiXiu = "Xĩu"
    }else{
      taiXiu = "Tài"
    }

    if(taiXiu == state.banChon){
      state.soBanThang += 1
    }
    

  
    return {...state,xiNgau : mangXucXacNgauNhien, result : result, taiXiu: taiXiu, tongSoBanChoi: state.tongSoBanChoi +1, }
   }}
  default:
    return state
  }
}