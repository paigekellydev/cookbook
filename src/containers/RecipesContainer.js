import React, { Component } from 'react'
import RecipeCard from '../components/RecipeCard'


const baseUrl = 'http://localhost:3000'
const recipeUrl = `${baseUrl}/recipes`

export default class RecipesContainer extends Component {

    state= {
        allRecipes:[]
    }
  
    componentDidMount() {
        fetch(recipeUrl)
        .then(response => response.json())
        .then(allRecipes => this.setState({ allRecipes }))
    }
  // function to add new recipe from form to allRecipes

    renderCards = () => {
        return this.props.allRecipes.map(recipe => {
           return (
            <RecipeCard 
                key={ recipe.id }
                recipe={ recipe }
            />
            ) 
        })
    }

    render() {
        return (
            <div>
                {this.renderCards()}
                <h2>Recipe Container</h2>
            </div>
        )
    }
}
