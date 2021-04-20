import React, { Component } from 'react'

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
    render() {
        return (
            <div>
                <h2>Recipe Container</h2>
            </div>
        )
    }
}
