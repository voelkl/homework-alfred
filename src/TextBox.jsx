import React from 'react'
import { Container } from '@material-ui/core';

export default class TextBox extends React.Component {
    render(){
         return(
            <Container maxWidth="sm">
                <h1>{this.props.data[this.props.id].title}</h1>
                <h3>{this.props.data[this.props.id].publisher}</h3>
                <h4>{this.props.data[this.props.id].type}</h4>
                <h5>{this.props.data[this.props.id].category.code}</h5>
                <h5>{this.props.data[this.props.id].category.title}</h5>
                <p>{this.props.data[this.props.id].text}</p>
                <a href={this.props.data[this.props.id].source}>{this.props.data[this.props.id].source}</a>
            </Container>
        )
    }

}