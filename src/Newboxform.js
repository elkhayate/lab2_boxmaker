import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
export default class Newboxform extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             width : "", color : "", height : "", text : ""
        }
    }
    handleChange =(evt)=>{
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }
    handleSubmit = (evt) => {
        evt.preventDefault();
        const newBox = {...this.state , id : uuidv4() };
        this.props.additem(newBox);
        this.setState({
            width : "", color : "", height : "", text : ""
        })

    }
    render() {
        return(
            <form onSubmit = {this.handleSubmit}>
                <label htmlFor="width">Width : </label>
                <input 
                id = "width"
                type = "text"
                name = "width"
                onChange = {this.handleChange}
                value = {this.state.width}
                /><br/>
                <label htmlFor="height">Height : </label>
                <input 
                id = "height"
                type = "text"
                name = "height"
                onChange = {this.handleChange}
                value = {this.state.height}
                /><br/>
                <label htmlFor="color">Color : </label>
                <input 
                id = "color"
                type = "text"
                name = "color"
                onChange = {this.handleChange}
                value = {this.state.color}
                /><br/>
                <label htmlFor="text">Text : </label>
                <input 
                id = "text"
                type = "text"
                name = "text"
                onChange = {this.handleChange}
                value = {this.state.text}
                /><br/>
                <button>Add</button>
            </form>
        )
    }
}