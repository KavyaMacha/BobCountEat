// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  eatMango = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          Bob ate <span className="count">{mangoes}</span> mangoes{' '}
          <span className="count">{bananas}</span> bananas
        </h1>
        <div className="fruits-container">
          <div className="fruit-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="fruit-image"
            />
            <button className="button" onClick={this.eatMango} type="button">
              Eat Mango
            </button>
          </div>
          <div className="fruit-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="fruit-image"
            />
            <button className="button" onClick={this.eatBanana} type="button">
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
