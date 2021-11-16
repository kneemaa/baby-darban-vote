import React, { Component } from "react"
import API from "../../utils/api"
import { PollResults } from "../../components/PollResults"
import Chart from "../../components/Chart"
import { CountDownTimer } from "../../components/CountDownTimer"
import { FormBtn, Input } from "../../components/Form"
import "../../App.css"

class Home extends Component {
  state = {
    genders: [],
    girls: 0,
    boys: 0,
    timeLeft: 1000,
    gender: "",
    author: ""
  }

  componentDidMount() {
    this.loadResults()
    this.getTimeLeft()
  };

  loadResults = () => {
    API.getResults()
      .then(res => this.setState({genders: res.data, girls: 0, boys: 0, gender: "", author: ""}))
      .catch(err => console.log(err))
      .then(res => this.breakDownGender())
  }

  breakDownGender() {
    const genders = this.state.genders
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

  getTimeLeft() {
    const countDownDate = new Date("Nov 18, 2021 22:00:00").getTime()
    let now = new Date().getTime();
    let distance = countDownDate - now;
    this.setState({timeLeft: distance})
  }


  setGender(event) {
    // console.log(event.target.value)
    this.setState({guess:event.target.value})
  }

  castVote = event => {
    event.preventDefault()
    if (this.state.author && this.state.gender) {
      API.vote({
        gender: this.state.gender,
        author: this.state.author
      })
      .then(res => console.log('vote cast for ' + this.state.author))
      .then(res => this.loadResults())
      .catch(err => console.log(err))
    }
  }

  postCastedVote = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <CountDownTimer timeLeft={this.state.timeLeft}/>
        <div className="PollQuestion">
          <p color="blue"> I'm the poll QUESTION section</p>
          <form>
            <Input 
              value={this.state.author}
              onChange={this.postCastedVote}
              placeholder="what's your name?"
              name="author"
            />
            <FormBtn
              onClick={this.castVote}
            >
              Cast Vote
            </FormBtn>
            <div onChange={this.postCastedVote.bind(this)}>
              <input type="radio" value="boy" name="gender"/> Boy
              <input type="radio" value="girl" name="gender"/> Girl
            </div>
          </form>
        </div>
        <Chart boys={this.state.boys} girls={this.state.girls}/>
        <PollResults boys={this.state.boys} girls={this.state.girls}/>
      </div>
    )
  }
}

export default Home
