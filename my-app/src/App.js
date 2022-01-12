
import axios from 'axios'
import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data :{}
        }
    }
    componentDidMount()
    {
        axios.get('https://api.pokemontcg.io/v2/cards?page=1&pageSize=10') 
        .then(res=>{
          console.log("data",res.data.response)
            this.setState({data : res.data.response})
           
        })
        .catch(err=>{
            console.log("err",err)
        })
    }
    render() {
        return (
            <div>
                HII
            </div>
        )
    }
}
