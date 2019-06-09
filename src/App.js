import React from 'react';
import './App.css';
import Results from './data/Results'
import ResultData from './data/results_2004.json'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedRace: ''
    }
    this.updateRace=this.updateRace.bind(this)
  }

  updateRace(event) {
    this.setState({ selectedRace: event.target.value })
  }

  render() {
    let demVote = 0
    let repVote = 0
    let otherVote = 0

    let raceSelection = []

    Object.entries(ResultData).forEach(([key,value]) => {
      otherVote = 0
      console.log(key)
      raceSelection.push(<option value={key}>{key}</option>)
      Object.entries(value).forEach(([key,value]) => {
        if(value.parties[0]==="Republican"){
          repVote = value.votes
        }
        else if (value.parties[0]==="Democratic"){
          demVote = value.votes
        }
        else{
          otherVote+=value.votes
        }
      })
        // console.log(key.slice(-2))
        // console.log("Republican votes: " + repVote)
        // console.log("Democratic votes: " + demVote)
        // console.log("Other votes: " + otherVote)
    })
    return (
      <div>
        <select value={this.state.selectedRace} onChange={this.updateRace}>
          <option value="" disabled>Select a race (year/state)</option>
          {raceSelection}
        </select>
      <Results />
      </div>
    );
  }
}

export default App;
