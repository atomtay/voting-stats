import React from 'react';
import ResultData from './results_2004.json'


class Results extends React.Component {
  render(){
    let demVote = 0
    let repVote = 0
    let otherVote = 0


    Object.entries(ResultData).forEach(([key,value]) => {
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

    
    
    return (
      <div>
        hello world!
        
      </div>
    )
  }
}

export default Results;
