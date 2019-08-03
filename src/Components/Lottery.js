import React, {Component} from 'react';
import './Lottery.css';

class Lottery extends Component{
  constructor(props) {
    super(props)
    // state = {
    //   title: "Lottery",
    //   numBalls: 5,
    //   maxVal: 9
    // }
    this.setState()
  }

  render(){
    return(
      <div class="lottery__container" id="lottery">{this.props.title}</div>
    )
  }
}


export default Lottery;