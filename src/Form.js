import React from 'react';

class Form extends React.Component {
    constructor(props){
        super(props)
        this.state={
            nodes: []
        }
        this.addNode = this.addNode.bind(this)
    }

    addNode(event){
        event.preventDefault()
        console.log("Submit!")
    }


    render(){
        let formStateSelect = []
        this.props.states.map(state => {
            return formStateSelect.push(<option value={state.props.value} key={state.props.value}>{state.props.value}</option>)
        })

        return (
        <div>
            <form>
                <input type="text" name="candidate" />
                <br/><select>
                    {formStateSelect}
                </select>
                <br/><input type="number" name="votes" />
                <br/><input type="submit" onClick={this.addNode}/>
            </form>
        </div>
        )
    }
}

/*
The second part of the challenge is to add a simple form to the bottom of your data visualization that allows a user to enter a state, candidate name, and vote total into the form and then submit it as a fake trip to the server. Upon clicking the form submit button you may simply serialize the form contents as JSON and add it to a DOM element defined as:

 

<pre class="debug"></pre>


*/

export default Form;
