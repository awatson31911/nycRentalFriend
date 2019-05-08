import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      nodes: [],
      bots: []
    }
    this.bots   
    this.nodes 
    this.getMiningData.bind(this) //Solidifies "this context"
  }

  async getMiningData() {
    //Makes axios request for bots+nodes data and stores in variable to set state with
    let botsVar= await axios.get(`http://headlight-tournament-3.herokuapp.com/bots`)
    .then( (res) => {
      return res.data
    }).catch(console.error) 
    let nodesVar = await axios.get(`http://headlight-tournament-3.herokuapp.com/nodes`)
    .then( (res) => {
      return res.data
    }).catch(console.error) 
    //console.log(nodesVar, botsVar)
    this.setState({
        nodes: nodesVar,
        bots: ['Hello world']
      })
    }
    
    componentWillMount() {
        this.getMiningData()
      //   axios.get(`http://headlight-tournament-3.herokuapp.com/bots`)
      //   .then((res) => {
      //     this.bots = res
      //     console.log(this)
      //   })
      //   .catch(console.error)
        
      //   axios.get(`http://headlight-tournament-3.herokuapp.com/nodes`)
      //   .then((res) => {
      //     this.nodes = res
      //   })
      //   .catch(console.error)
       }
      
      render() {
        return (
          <div>
        Hello World
        {console.log(this.state)}
        </div>
        )
      }
    }