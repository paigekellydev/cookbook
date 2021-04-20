import './App.css';
import CategoryMenu from './components/CategoryMenu';
import AddRecipeForm from './components/AddRecipeForm';
import RecipesContainer from './components/RecipesContainer';
import React, { Component } from 'react'

const baseUrl = 'http://localhost:3000'
const recipeUrl = `${baseUrl}/recipes`

export default class App extends Component {
  state= {
        allRecipes:[]
  }
  
  componentDidMount() {
    fetch(recipeUrl)
      .then(response => response.json())
      .then(allRecipes => this.setState({ allRecipes }))
  }

  render() {
    return (
      <div className="App">
        <CategoryMenu />
        <AddRecipeForm allRecipes={ this.state.allRecipes }/>
        <RecipesContainer allRecipes={ this.state.allRecipes }/>
      </div>)
  }
}
