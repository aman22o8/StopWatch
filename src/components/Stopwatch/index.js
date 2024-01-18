// Write your code here
import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  constructor(props) {
    super(props)
    this.state = {initialSecond: 0, isPause: false}
  }

  componentWillUnmount() {
    this.stopStopwatch()
  }

  renderMinutes = () => {
    const {initialSecond} = this.state
    const secondPassed = Math.floor(initialSecond % 60)
    const minutesPassed = Math.floor(initialSecond / 60)
    const stringifiedSecond =
      secondPassed > 9 ? secondPassed : `0${secondPassed}`
    const stringifiedMinutes =
      minutesPassed > 9 ? minutesPassed : `0${minutesPassed}`
    return `${stringifiedMinutes}:${stringifiedSecond}`
  }

  stopStopwatch = () => {
    clearInterval(this.timerId)
  }

  handleStart = () => {
    const {isPause} = this.state
    if (isPause === false) {
      this.timerId = setInterval(this.tick, 1000)
    }
    this.setState({isPause: true})
  }

  tick = () => {
    this.setState(prevState => ({initialSecond: prevState.initialSecond + 1}))
  }

  handleStop = () => {
    this.stopStopwatch()
    this.setState({isPause: false})
  }

  handleReset = () => {
    this.stopStopwatch()
    this.setState({initialSecond: 0, isPause: false})
  }

  render() {
    // const {initialSecond} = this.state

    return (
      <div className="app-container">
        <div className="stopwatch_container">
          <h1 className="main_heading">Stopwatch</h1>
          <div className="card_Container">
            <div className="timer_container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer_icon"
              />
              <p className="timer_para">Timer</p>
            </div>
            <h1 className="timer_running">{this.renderMinutes()}</h1>
            <div className="btn_container">
              <button
                onClick={this.handleStart}
                type="button"
                className="start_btn"
              >
                Start
              </button>
              <button
                onClick={this.handleStop}
                type="button"
                className="stop_btn"
              >
                Stop
              </button>
              <button
                onClick={this.handleReset}
                type="button"
                className="reset_btn"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default StopWatch
