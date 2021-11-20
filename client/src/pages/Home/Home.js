import React, { Component } from "react"
import API from "../../utils/api"
import Chart from "../../components/Chart/Chart"
import PollQuestion from "../../components/PollQuestion/PollQuestion.js"
import {CountDownTimer} from "../../components/CountDownTimer/countdowntimer"
import Announce from "../../components/Announce/Announce.js"
import { Footer } from "../../components/Footer"
import { List, ListItem } from "../../components/List";
import moment from "moment"
import Cookies from 'universal-cookie'
import "../../App.css"

class Home extends Component {
  // initialize the state with the values we want to manage
  state = {
    genders: [],
    winners: [],
    girls: 0,
    boys: 0,
    timeLeft: 1000,
    gender: "",
    author: "",
    reveal: "", 
    ballotCast: false,
    // 5 pm on sunday
    endTime: process.env.ENDTIME || "2021-11-16 17:00:00"
  }

  // when this component mounts, run these functions
  componentDidMount() {
    this.loadResults()
    this.getTimeLeft()
  };

  // do the API call for getting all of the results and update state
  loadResults = () => {
    API.getResults()
      .then(res => this.setState({genders: res.data}))
      .catch(err => console.log(err))
      // we will wait for the state to be updated then will run the breakDownGender() function
      .then(res => this.breakDownGender())

      // set a cookie that the user has cast a ballot
      const cookies = new Cookies()
      if (cookies.get('ballotCast')) {
        this.setState({ballotCast: true})
      }
    
    if (this.state.timeLeft >= 0) {
      API.reveal()
        .then(res => {
          this.setState({reveal: res.data.result})
          
          API.findWinners(res.data.result)
            .then(win => this.setState({winners: win.data}))
            .catch(err => console.log(err))
        })
        // if there's an error, 'catch' it and console.log it
        .catch(err => console.log(err))
    }
  }

  // lets count the votes
  breakDownGender() {
    // assign the state value to a variable for easier reference below
    const genders = this.state.genders

    // iterate through each of the entries and check for the gender, anything that doesn't match will not be tallied
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
    // convert the desired end time
    const announceTime = moment(this.state.endTime)
    // calculate how many seconds between now and the desired end time
    const distance = announceTime.diff(moment(), "seconds")
    // put this time in the state
    this.setState({timeLeft: distance})
  }

  // call back function for the PollQuestion component to be able to send back data for the state
  handleCastedVote = (childData) => {
    // update the state with the data sent back
    this.setState(childData)
    // request the database be reloaded to the client
    this.loadResults()

    // lets set a cookie that the ballot was cast
    const cookies = new Cookies()
    cookies.set('ballotCast', {path: '/'})
  }

  // now lets render our DOM
  render() {
    return (
      //main container with 3 columns/cards      
      <div className="container">
        <div className="row">
          <div className="col-sm-4 side-col"></div>
          <div className="col-sm-4 main-body">
                {/* ternery condition explained
                  condition ? ifTrue : ifFalse
                */}
                {/* if the timeLeft in the state is equal or less than 0 move on, go to the else condition*/}
                {this.state.timeLeft <= 0 ? (
                  <div>
                    {/* if the ballot HAS been cast, show the Chart Results and the Announcement
                      If the ballot has not been cast, show the PollQuestion 
                    */}
                    {this.state.ballotCast ? (
                      <div>
                        <Announce reveal={this.state.reveal}/>
                        <span className="table-title">Who guessed right?</span>
                        <List>
                        {this.state.winners.map(winner => (
                          <ListItem key={winner._id}>
                              <strong>
                                {winner.author}
                              </strong>
                          </ListItem>
                        ))}
                      </List>
                      </div>
                    ) : (<PollQuestion voteCallback={this.handleCastedVote}/>)}
                  </div>
                ) : (
                  <div>
                    {/* if the vote has been cast show the chart, otherwise show the Poll */}
                    {!this.state.ballotCast ? ( 
                        <PollQuestion voteCallback={this.handleCastedVote}/>
                      ) : (
                        <div>
                        <CountDownTimer timeLeft={this.state.timeLeft * 1000}/>
                        <Chart boys={this.state.boys} girls={this.state.girls}/>
                        </div>
                      )
                    }
                  </div>
                  )
                }
          </div>
          <div className="col-sm-4 side-col"></div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Footer/>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
