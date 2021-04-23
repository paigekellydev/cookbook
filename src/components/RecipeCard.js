import React, { Component } from 'react'

export default class RecipeCard extends Component {

    renderList = (string) => {
        return string.split(",").map(listItem => {
            return <li>{listItem}</li>
        })
    }


    render() {
        return (
            
            <div className="card">
                <span>
                <img src={this.props.recipe.img} />
                <h1>Recipe Name: {this.props.recipe.recipeName}</h1>
                <p>Kitchen of: {this.props.recipe.kitchen}</p>
                <p>Category: {this.props.recipe.category}</p>
                <p>Prep Time: {this.props.recipe.prepTime} minutes</p>
                <p>Cook Time: {this.props.recipe.cookTime} minutes</p>
                <section>
                    <p>Ingredients:</p> 
                    <ul>
                        {this.renderList(this.props.recipe.ingredients)}
                    </ul>
                </section>
                <section>
                    <p>Directions:</p> 
                    <ol>
                        {this.renderList(this.props.recipe.directions)}
                    </ol>
                </section>
                </span>
            </div>
            
        )
    }
}
