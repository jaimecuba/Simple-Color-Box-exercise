import React, { Component } from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm'

export default class BoxList extends Component {
    constructor(props){
        super(props)
        this.state = {
            boxes: []
        }

        this.create = this.create.bind(this)
        this.remove = this.remove.bind(this)
    }

    remove(id){
        this.setState({
            boxes: this.state.boxes.filter(box => (
                box.id !== id
            ))
        })
    }

    create(newBox){
        this.setState({
            boxes: [...this.state.boxes, newBox]
        })
    }

    render() {

        const box = this.state.boxes.map(box => ( 
            <Box 
                width={box.width} 
                height={box.height} 
                color={box.color} 
                key={box.id} 
                id={box.id} 
                removeBox={this.remove}
                />
        ))

        return (
            <div>
                <NewBoxForm createBox={this.create} />
                {box}
            </div>
        )
    }
}
