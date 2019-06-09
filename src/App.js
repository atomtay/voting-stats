import React from 'react';
import './App.css';
import Results from './data/Results'
import ResultData from './data/results_2004.json'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedRace: '',
      repVote: 0,
      demVote: 0,
      otherVote: 0
    }
    this.updateRace=this.updateRace.bind(this)
  }

  updateRace(event) {
    let repVotes = 0
    let demVotes = 0
    let otherVotes = 0

    Object.entries(ResultData).forEach(([key,value]) => {
      Object.entries(value).forEach(([key,value]) => {
        if (value.id === event.target.value){
          if(value.parties[0]==="Republican"){
            repVotes = value.votes
          }
          else if (value.parties[0]==="Democratic"){
            demVotes = value.votes
          }
          else{
            otherVotes+=value.votes
          }
        }
      })
    })

    this.setState({ repVote:repVotes })
    this.setState({ demVote:demVotes })
    this.setState({ otherVote:otherVotes })
    this.setState({ selectedRace: event.target.value })
  }

  render() {
    let raceSelection = []

    Object.entries(ResultData).forEach(([key,value]) => {
      raceSelection.push(<option value={key}>{key}</option>)
    })

    return (
      <div>
        <select value={this.state.selectedRace} onChange={this.updateRace}>
          <option value="" disabled>Select a race (year/state)</option>
          {raceSelection}
        </select>
      <Results repVotes={this.state.repVote} demVotes={this.state.demVote} otherVotes={this.state.otherVote}/>
      </div>
    );
  }
}

export default App;
