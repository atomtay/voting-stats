import React from 'react';
import { Bar } from 'react-chartjs-2'


class Results extends React.Component {
  render(){
    const data = {
      labels: ['2004','2008','2012'],
      datasets: [
        {
          label: "Republican votes",
          backgroundColor: 'rgba(233,11,11,.4)',
          borderColor: 'rgba(145,2,2,.4)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(233,11,11,.5)',
          hoverBorderColor: 'rgba(145,2,2,.5)',
          data: [this.props.repVotes2004,7,4]
        },
        {
          label: "Democratic votes",
          backgroundColor: 'rgba(11,11,233,.4)',
          borderColor: 'rgba(2,2,99,.4)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(11,11,233,.5)',
          hoverBorderColor: 'rgba(2,2,99,.5)',
          data: [this.props.demVotes2004,3,5]
        },
        {
          label: "Other votes",
          backgroundColor: 'rgba(233,233,11,.4)',
          borderColor: 'rgba(233,233,5,.4)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(233,233,11,.5)',
          hoverBorderColor: 'rgba(233,233,5,.5)',
          data: [this.props.otherVotes2004,2,6]
        }
      ]
    };

    const options = {
      scales: {
        yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
  }}
    
    return (
      <div>
        <Bar data={data} options={options}/>
      </div>
    )
  }
}

export default Results;
