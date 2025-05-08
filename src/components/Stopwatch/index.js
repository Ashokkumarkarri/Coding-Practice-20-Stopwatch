// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {min: 0, sec: 0, isRunning: false}

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  myTimer = () => {
    this.setState(prevState => {
      const totalSec = prevState.min * 60 + prevState.sec + 1
      return {
        min: Math.floor(totalSec / 60),
        sec: totalSec % 60,
      }
    })
  }

  start = () => {
    const {isRunning} = this.state
    if (!isRunning) {
      this.timerID = setInterval(this.myTimer, 1000)
      this.setState({isRunning: true})
    }
  }

  stop = () => {
    clearInterval(this.timerID)
    this.setState({isRunning: false})
  }

  reset = () => {
    clearInterval(this.timerID)
    this.setState({min: 0, sec: 0, isRunning: false})
  }

  render() {
    const {min, sec} = this.state
    const format = num => num.toString().padStart(2, '0')
    return (
      <div className="bg-container">
        <h1>Stopwatch</h1>
        <div className="clock-div">
          <div className="img-timer-div">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p>timer</p>
          </div>
          <h1>
            {format(min)}:{format(sec)}
          </h1>
          <div className="buttons-div">
            <button className="green-btn" onClick={this.start} type="button">
              Start
            </button>
            <button className="red-btn" onClick={this.stop} type="button">
              Stop
            </button>
            <button className="yellow-btn" onClick={this.reset} type="button">
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
