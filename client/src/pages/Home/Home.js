import React, { Component } from "react"
import API from "../../utils/api"
import PollResults from "../../components/PollResults"
import PollQuestion from "../../components/PollQuestion"

class Home extends Component {
  state = {
    genders: [],
    girls: 0,
    boys: 0
  }

  componentDidMount() {
    this.loadResults()
  };

  loadResults = () => {
    API.getResults()
      .then(res => this.setState({genders: res.data}))
      .catch(err => console.log(err))
      .then(res => this.breakDownGender())
  }

  breakDownGender() {
    const genders = this.state.genders
    console.log(genders)
    for (let entry in genders) {
      if (genders[entry].gender === 'girl') {
        this.setState((state) => {
          return { girls: state.girls + 1}
        })
      }

      if (genders[entry].gender === 'boy') {
        this.setState((state) => {
          return { boys: state.boys + 1}
        })
      }
    }
  }
  render() {
    return (
      <div>
        <PollQuestion/>
        <PollResults/>
      </div>
    )
  }
}

export default Home
