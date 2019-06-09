import React from 'react';
import Results from './data/Results';
import results_2004 from './data/results_2004.json';
import results_2008 from './data/results_2008.json';
import results_2012 from './data/results_2012.json';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedState: '',
      votes2004: [],
      votes2008: [],
      votes2012: []
    }
    this.updateRace=this.updateRace.bind(this)
    this.setVotes=this.setVotes.bind(this)
  }

  setVotes(event,race){
    let repVotes = 0
    let demVotes = 0
    let otherVotes = 0
    let newSelectedState = event.target.value

    Object.entries(race).forEach(([key,value]) => {
      Object.entries(value).forEach(([key,value]) => {
        if (value.id.slice(-2) === newSelectedState){
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
    return [repVotes,demVotes,otherVotes]
  }

  updateRace(event) {
    const calculated2004votes = this.setVotes(event,results_2004)
    const calculated2008votes = this.setVotes(event,results_2008)
    const calculated2012votes = this.setVotes(event,results_2012)

    this.setState({selectedState:event.target.value})
    this.setState({votes2004:calculated2004votes})
    this.setState({votes2008:calculated2008votes})
    this.setState({votes2012:calculated2012votes})
  }

  render() {
    let raceSelection = []

    Object.entries(results_2004).forEach(([key,value]) => {
      const state = key.slice(-2)
      raceSelection.push(<option value={state}>{state}</option>)
    })

    return (
      <div>
        <select value={this.state.selectedState} onChange={this.updateRace}>
          <option value="" disabled>Select a state</option>
          {raceSelection}
        </select>
      <Results repVotes2004={this.state.repVote} demVotes2004={this.state.demVote} otherVotes2004={this.state.otherVote}/>
      </div>
    );
  }
}

export default App;
