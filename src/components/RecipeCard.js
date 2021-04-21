import React, { Component } from 'react'

export default class RecipeCard extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.recipe.recipeName}</h1>
                <img src={this.props.recipe.img} />
                <p>Category: {this.props.recipe.category}</p>
                <p>{this.props.recipe.cookTime} minutes</p>
                <p>{this.props.recipe.ingredients}</p>
                <p>{this.props.recipe.directions}</p>
            </div>
        )
    }
}
