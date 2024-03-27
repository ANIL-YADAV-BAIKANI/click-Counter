import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }
  state = {count: 0}

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="heading">
            The Button has been clicked <br />{' '}
            <span className="number">{count}</span> times
          </h1>
          <p className="para-2">Click the button to increase the count!</p>
          <button className="button" onClick={this.increment}>
            Click Me
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
