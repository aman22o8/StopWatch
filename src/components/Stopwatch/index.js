// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {initial: false, initialminutes: 0, initialsecond: 0}
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  resetting = () => {
    clearInterval(this.intervalId)
    this.setState({initial: false, initialminutes: 0, initialsecond: 0})
  }

  starting = () => {
    this.intervalId = setInterval(this.tick, 1000)
    this.setState({initial: true})
    // this.setState(prevState => ({initial: !prevState.initial}))
  }

  tick = () => {
    const {initialsecond} = this.state
    if (initialsecond === 59) {
      this.setState(prevState => ({
        initialminutes: prevState.initialminutes + 1,
        initialsecond: 0,
      }))
    }
    this.setState(prevState => ({initialsecond: prevState.initialsecond + 1}))
  }

  stopping = () => {
    clearInterval(this.intervalId)
    this.setState({initial: false})
  }

  render() {
    const {initial, initialminutes, initialsecond} = this.state
    console.log(initial, initialminutes, initialsecond)
    return (
      <div className="bg_container">
        <div className="stopwatch_container">
          <h1 className="heading">Stopwatch</h1>

          <div className="mystop_container">
            <div className="first">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="image1"
              />
              <p className="timer">Timer</p>
            </div>

            <h1 className="counter">
              {initialminutes > 9 ? initialminutes : `0${initialminutes}`}:
              {initialsecond > 9 ? initialsecond : `0${initialsecond}`}
            </h1>

            <div className="third">
              <button
                disabled={initial}
                onClick={this.starting}
                type="button"
                className="btn start"
              >
                Start
              </button>
              <button
                onClick={this.stopping}
                type="button"
                className="btn stop"
              >
                Stop
              </button>
              <button
                onClick={this.resetting}
                type="button"
                className="btn reset"
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

export default Stopwatch
