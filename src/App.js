import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Menu from './Menu';
import Detail from './Detail';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      detail:[]
    }
  }

  componentDidMount() {
    Axios.get("https://stream-restaurant-menu-svc.herokuapp.com/category")
      .then((res) => { this.setState({ list: res.data }) })
  }

  getDetail = (name) => {
    Axios.get(`https://stream-restaurant-menu-svc.herokuapp.com/item?category=${name}`)
      .then((res) => { this.setState({ detail:res.data }) })
  }

  render() {
    return (
      <div className="App">
        <Menu list={this.state.list} getDetail={this.getDetail}/>
        <Detail detail={this.state.detail}/>
      </div>
    );
  }
}

export default App;
