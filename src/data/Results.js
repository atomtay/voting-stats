import React from 'react';
import ResultData from './results_2004.json'
import { Bar } from 'react-chartjs-2'


class Results extends React.Component {
  render(){
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
          data: [1, 2, 3]
        }
      ]
    };
    
    
    return (
      <div>
        <Bar data={data} />
      </div>
    )
  }
}

export default Results;
