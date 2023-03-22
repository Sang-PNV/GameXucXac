import React, { Component } from 'react'
import { connect } from 'react-redux'
import Choice from './Choice'
import { PLAY, RESTART, TAI, XIU } from './redux/constant/xucXacConstant'
import Result from './Result'
import XucXac from './XucXac'
import './XucXac.css'

 class GameXucXac extends Component {
  render() {
    return (
    <div className='game' style={{backgroundImage : "./GameImg/bgGame.png"}}>
        <div className='title-game text-center pt-5'>
        Game Xúc Xắc Tài Xỉu
        </div>
        <div className='row text-center'>
            <div className='col-5'>
                <button onClick={this.props.choiceTai} className='btnGame btnLeft'>Tài</button>
            </div>
            <div className='col-2'>
                <XucXac/>
                
            </div>
            <div className='col-5'>
                <button onClick={this.props.choiceXiu} className='btnGame btnRight'>Xỉu</button>
            </div>
        </div>
        <div className='text-center'>
            <Choice/>
            <button onClick={this.props.playGame} className='btnPlayGame btn btn-success'>Play Game</button>
            <br />
            <button onClick={this.props.restart} className='btnPlayGame mt-3 btn btn-danger'>Restart</button>
            <Result/>
        </div>
    </div>
    )
  }
}
let mapDispatchToProps = (dispatch) => {
    return{
        choiceTai : () => {
         let action = {
            type : TAI,
         }
         dispatch(action)
        },

        choiceXiu: () => {
         let action = {
            type: XIU,
         }
         dispatch(action)
        },

        playGame: () =>{
            let action = {
                type : PLAY,
            }
            dispatch(action)
        },
        restart: () => {
            let action = {
                type : RESTART,
            }
            dispatch(action)
        }
    }
}
export default connect(null,mapDispatchToProps)(GameXucXac)
