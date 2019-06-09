import React from 'react';
import { Bar } from 'react-chartjs-2'


class Results extends React.Component {
  render(){
    const data = {
      labels: ['Republican','Democratic','Other'],
      datasets: [
        {
          label: 'Votes',
          backgroundColor: ['rgba(233,11,11,.4)','rgba(11,11,233,.4)','rgba(233,233,11,.4)'],
          borderColor: ['rgba(145,2,2,.4)','rgba(2,2,99,.4)','rgba(233,233,5,.4)'],
          borderWidth: 1,
          hoverBackgroundColor: ['rgba(233,11,11,.5)','rgba(11,11,233,.5)','rgba(233,233,11,.5)'],
          hoverBorderColor: ['rgba(145,2,2,.5)','rgba(2,2,99,.5)','rgba(233,233,5,.5)'],
          data: [this.props.repVotes, this.props.demVotes, this.props.otherVotes]
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
