import React, { Component } from 'react'
import RecipeCard from './RecipeCard'

export default class RecipesContainer extends Component {

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
