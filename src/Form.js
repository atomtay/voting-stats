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

        this.props.states.map((state, id) => {
            return formStateSelect.push(<option value={state.props.value} key={id}>{state.props.value}</option>)
        })

        return (
        <section>
            <form onSubmit={this.addNode}>
            <h2>Add JSON nodes</h2>
                <label>Candidate name:</label><input type="text" name="candidate" value={this.state.value} onChange={this.handleChange}/>
                <br/><label>Candidate state:</label><select value={this.state.state} name="state" onChange={this.handleChange}>
                    <option value="" disabled>Select a state</option>
                    {formStateSelect}
                </select>
                <br/><label>Number of votes:</label><input type="number" name="votes" value={this.state.value} onChange={this.handleChange}/>
                <br/><input type="submit"/>
            </form>
            <article>
                {results}
            </article>
        </section>
        )
    }
}

export default Form;
