import React from 'react';
import ResultData from './results_2004.json'
import { Bar } from 'react-chartjs-2'


class Results extends React.Component {
 

  render(){
    let demVote = 0
    let repVote = 0
    let otherVote = 0

    Object.entries(ResultData).forEach(([key,value]) => {
      otherVote = 0
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
        console.log(key.slice(-2))
        console.log("Republican votes: " + repVote)
        console.log("Democratic votes: " + demVote)
        console.log("Other votes: " + otherVote)
    })

    const data = {
      labels: ['Republican','Democrat','Other'],
      datasets: [
        {
          label: 'Votes',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [repVote, demVote, otherVote]
        }
      ]
    };
    
    
    return (
      <div>
        hello world!
        <Bar data={data} />
      </div>
    )
  }
}

export default Results;
