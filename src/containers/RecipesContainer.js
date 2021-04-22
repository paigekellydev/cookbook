import React, { Component } from 'react'
import RecipeCard from '../components/RecipeCard'


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
            </div>
        )
    }
}
