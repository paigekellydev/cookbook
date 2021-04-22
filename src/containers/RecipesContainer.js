import React, { Component } from 'react'
import RecipeCard from '../components/RecipeCard'


export default class RecipesContainer extends Component {

    selectCategory = () => {
        if(this.props.filteredRecipes.length > 0) {
            return this.props.filteredRecipes
        } else {
            return []
        }
    }

    renderCards = () => {
        return this.selectCategory().map(recipe => {
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
