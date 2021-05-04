import React, { Component } from 'react';
import Box from './Box';
import Newboxform from './Newboxform';

export default class Boxlist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             boxes : []
        }
    }
    addItem = (item) => {
        this.setState({
            boxes : [...this.state.boxes , item]
        })
    }
    render() {
        const myList = this.state.boxes.map(b => 
        <Box 
        color = {b.color}
        width = {b.width}
        height = {b.height}
        text = {b.text}
        key = {b.id}
        />)
        return(
            <div>
                <h1>A simple Box maker.</h1>
                <Newboxform 
                additem = {this.addItem}
                />
                {myList}
            </div>
        )
    }
}