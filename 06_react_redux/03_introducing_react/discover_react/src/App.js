import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from "underscore";




class App extends Component {
  constructor(props){
    super(props);
    this.order= 'asc';
    this.state = {products: props.products}
  }

  headTab() {
    return (
        <thead class="thead-dark">
          <tr>
            <th scope="col" onClick={() => this.sort('decathlon_id')}>Id Product</th>
            <th scope="col" onClick={() => this.sort('title')}>Title</th>
            <th scope="col" onClick={() => this.sort('price')}>Price</th>
          </tr>
        </thead>
    );
  };



  contentTab(array) {
    return array.map(element => (
          <tr>
            <td>{element.decathlon_id}</td>
            <td>{element.title}</td>
            <td>{element.price}</td>
          </tr>
        )
    );
  };


  sort = (param) => {
    const tabById = _.sortBy(this.state.products, param);
    if (this.order === 'asc') {
    this.setState({products: tabById});
    this.order = 'desc';
  } else {
  this.setState({products: tabById.reverse()});
  this.order = 'asc';}
  };

  render() {
    return (
      <div className="Product">
        <table class="table">
          {this.headTab()}
          {this.contentTab(this.state.products)}
        </table>
      </div>
    );
  }
}

export default App;
