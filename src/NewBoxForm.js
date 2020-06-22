import React, { Component } from 'react'
import uuid from 'uuid/dist/v4'

export default class NewBoxForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            width: "",
            height: "",
            color: ""
        }
        this.inputHandler = this.inputHandler.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    inputHandler(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt){
        evt.preventDefault()
        const newBox = {...this.state, id: uuid()}
        this.props.createBox(newBox)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Width" name="width" onChange={this.inputHandler}></input>
                    <input placeholder="Height" name="height" onChange={this.inputHandler}></input>
                    <input placeholder="Color" name="color" onChange={this.inputHandler}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
