import React from 'react';

class Form extends React.Component {
    constructor(props){
        super(props)
        this.state={
            candidate: '',
            state: '',
            votes: 0,
            nodes: [],
        }
        this.addNode = this.addNode.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    addNode(event){
        event.preventDefault()
        const formName = this.state.candidate
        const formState = this.state.state
        const formVotes = this.state.votes

     
        let oldNodes = this.state.nodes
        oldNodes.push({
            [formName]: {
                abbr: formState,
                votes: parseInt(formVotes)
            }
        })
        
        this.setState({nodes: oldNodes})
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }


    render(){
        let formStateSelect = []
        let results = []

        this.state.nodes.map(entry => {
            console.log({entry})
            return results.push(<pre className="debug" key={entry}>{JSON.stringify(entry)}</pre>)
        })

        this.props.states.map(state => {
            return formStateSelect.push(<option value={state.props.value} key={state.props.value}>{state.props.value}</option>)
        })

        return (
        <div>
            <form onSubmit={this.addNode}>
                <input type="text" name="candidate" value={this.state.value} onChange={this.handleChange}/>
                <br/><select value={this.state.state} name="state" onChange={this.handleChange}>
                    <option value="" disabled>Select a state</option>
                    {formStateSelect}
                </select>
                <br/><input type="number" name="votes" value={this.state.value} onChange={this.handleChange}/>
                <br/><input type="submit"/>
            </form>
            {results}
        </div>
        )
    }
}

/*
The second part of the challenge is to add a simple form to the bottom of your data visualization that allows a user to enter a state, candidate name, and vote total into the form and then submit it as a fake trip to the server. Upon clicking the form submit button you may simply serialize the form contents as JSON and add it to a DOM element defined as:

 

<pre class="debug"></pre>


*/

export default Form;
