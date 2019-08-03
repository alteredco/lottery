import React, {Component} from 'react';
import "./LotteryBall.css";

class LotteryBall extends Component {
  render(){
    return(
      <div className="LottoBall__container">
        {this.props.num}
      </div>
    )
  }
}

export default LotteryBall;