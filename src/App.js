import React from 'react';
import Results from './Results';
import Form from './Form';
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

  containsDem(string){
    return string.includes("Democrat")
  }

  containsRep(string){
    return string.includes("Republican")
  }

  setVotes(event,race){
    let repVotes = 0
    let demVotes = 0
    let otherVotes = 0
    let newSelectedState = event.target.value

    Object.entries(race).forEach(([key,value]) => {
      Object.entries(value).forEach(([key,value]) => {
        if (value.id.slice(-2) === newSelectedState){
          if(value.parties.some(this.containsRep)){
            repVotes = value.votes
          }
          else if (value.parties.some(this.containsDem)){
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
    let stateSelection = []

    Object.entries(results_2004).forEach(([key,value]) => {
      const state = key.slice(-2)
      stateSelection.push(<option value={state} key={key}>{state}</option>)
    })

    return (
      <main>
        <h1>U.S. Election Results</h1>
        <select value={this.state.selectedState} onChange={this.updateRace}>
          <option value="" disabled>Select a state</option>
          {stateSelection}
        </select>
      <Results votes2004={this.state.votes2004} votes2008={this.state.votes2008} votes2012={this.state.votes2012}/>
      <Form states={stateSelection}/>
      </main>
    );
  }
}

export default App;
