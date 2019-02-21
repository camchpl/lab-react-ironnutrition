import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from  './FoodBox.js';
import Form from './Form.js';

class App extends Component {
  constructor() {
    super(); //this runs React Component's constructor
    this.state = {
      foods: foods
    };
  }

  addFood = () => {


  };
  

  render() {
    return (
      <div className="App">
      <h1>IronNutrition</h1>
      <div>
    <input type="text" className="input" placeholder="Search..." />
    <button onClick={ () => this.addFood ()} >Add Food</button>
</div>
        {this.state.foods.map((food, index) => {
          return <FoodBox key={index} img={food.image} name={food.name} calories={food.calories}/>;
        })}

        <FoodBox />
      </div>
    );
  }
}

export default App;


