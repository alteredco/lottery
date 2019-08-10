import React, {Component} from 'react';
import './Flip.css';
import Coin from './Coin';
import {choice} from  '../helpers.js';

class Flip extends Component{
  static defaultProps = {
    title: "Ankh Morpork Coin Toss",
    coins: [
      {side: "heads", imgSrc:"/images/ankh-morpork-heads.jpg"},
      {side: "tails", imgSrc:"/images/ankh-morpork-tails.jpg"}
    ]
  }
  constructor(props) {
    super(props);
    this.state = {
      currSide: null,
      flips: 0,
      headNum: 0,
      tailNum: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  flipCoin() {
    const newSide = choice(this.props.coins);
    this.setState(st => {
      return {
        currSide:newSide,
        flips: st.flips += 1,
        headNum: st.headNum + (newSide.side === "heads" ? 1 : 0),
        tailNum: st.tailNum + (newSide.side === "tails" ? 1 : 0),
      }
      // let newState =  {
      //     ...st
      //     currSide: newSide,
      //     flips: st.flips+1,
      //   }
      // if(newState.side === "heads") {
      //   newState.headNum += 1;
      // }else {
      //   newState.tailNum += 1;
      // }
      // return newState;
    })
  }
  handleClick(e){
    this.flipCoin();
  }
  render(){
    return(
      <section className="flip__container">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.currSide && <Coin info={this.state.currSide} />}
        </div>
        <button onClick={this.handleClick}>FLIP!</button>
        <h4>Out of {this.state.flips} you have tossed {this.state.headNum} heads and {this.state.tailNum} tails.</h4>
      </section>

    )
  }
}


export default Flip;