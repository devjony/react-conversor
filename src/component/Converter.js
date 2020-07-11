import React, { Component } from 'react';
import './Converter.css'

export default class Converter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            coinA_value: "",
            coinB_value: 0
        }

        this.convert = this.convert.bind(this)
    }

    convert() {
        let is_be = `${this.props.coinA}_${this.props.coinB}`
        let url = `https://free.currconv.com/api/v7/convert?q=${is_be}&compact=y&apiKey=a3ec1820f9f3f8a7be76`
        
        fetch(url)
        .then(res => {
            return res.json()
        })
        .then(json => {
            let cotation = json[is_be].value
            let moedaB_value = (parseFloat(this.state.moedaA_value * cotation).toFixed(2))
            this.setState({ moedaB_value })
        })
    }

    render() {
        return (
            <div className="converter">
                <h2>{this.props.coinA} to {this.props.coinB}</h2>
                <input type="text" onChange={(event) => { this.setState({ coinA_value: event.target.value }) }} />
                <input type="button" value="Convert" onClick={ this.convert } />
                <h2>{ this.state.moedaB_value }</h2>
            </div>
        )
    }
}
