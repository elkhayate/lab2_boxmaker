import React, { Component } from 'react';

export default class Box extends Component {
    render() {
        const myStyle = {
                backgroundColor : this.props.color,
                width : `${this.props.width}px`, 
                height : `${this.props.height}px`
        }
        return(
            <div style={myStyle}> 
                <p>{this.props.text}</p>
            </div>        
        )
    }
}