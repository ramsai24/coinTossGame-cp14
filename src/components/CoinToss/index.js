// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {imageStatus: true, total: 0, heads: 0, tails: 0}

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)

    if (tossResult !== 0) {
      this.setState(preState => ({
        imageStatus: false,
        total: preState.total + 1,
        tails: preState.tails + 1,
      }))
    } else {
      this.setState(preState => ({
        imageStatus: true,
        total: preState.total + 1,
        heads: preState.heads + 1,
      }))
    }
  }

  render() {
    console.log(this.state)
    const {imageStatus, total, heads, tails} = this.state

    return (
      <div className="app-container">
        <div className="bg-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          {imageStatus ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="heads"
              className="heads-img"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="tails"
              className="tails-img"
            />
          )}
          <button
            className="toss-coin-btn"
            type="button"
            onClick={this.tossCoin}
          >
            Toss Coin
          </button>
          <div className="statics-container">
            <p>Total:{total}</p>
            <p>Head:{heads}</p>
            <p>Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
