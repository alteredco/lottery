import React, {Component} from 'react';
import './Lottery.css';
import LotteryBall from './LotteryBall';

class Lottery extends Component{
  static defaultProps = {
    title: "Lotto",
    numBalls: 6,
    maxVal: 40
  }
  constructor(props) {
    super(props);
    this.state = {nums: Array.from({length: this.props.numBalls})};
    this.handleClick = this.handleClick.bind(this);
  }
  generate() {
    this.setState(curState => ({
      nums: curState.nums.map(n=> Math.floor(Math.random()*this.props.maxVal)+1)
    }));
  }
  handleClick(){
    this.generate();
  }
  render(){
    return(
      <section class="lottery__container">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(n => <LotteryBall num={n}/>)}
        </div>
        <button onClick={this.handleClick}>DROP BALLS!</button>
      </section>

    )
  }
}


export default Lottery;