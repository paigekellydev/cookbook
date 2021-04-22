import React, { Component } from 'react'
import CategoryMenu from './CategoryMenuContainer'
import AddNewRecipeForm from '../components/AddNewRecipeForm';
import RecipesContainer from './RecipesContainer';
import DiscoverRecipesMenu from '../components/DiscoverRecipesMenu';

const baseUrl = 'http://localhost:3000'
const recipeUrl = `${baseUrl}/recipes`

export default class PageContainer extends Component {

    state ={
        allRecipes:[],
        newRecipeId: 0,
        filteredRecipes: []
    }
  
    componentDidMount() {
        fetch(recipeUrl)
            .then(response => response.json())
            .then(allRecipes => this.setState({ 
                allRecipes: allRecipes,
                newRecipeId: allRecipes[allRecipes.length -1].id + 1
            }))

    }

    addNewRecipeToState = (newRecipe) => {
        this.setState({
            allRecipes: [...this.state.allRecipes, newRecipe],
            newRecipeId: this.state.newRecipeId + 1
        })
    }

    discoverByCategory = (categoryString) => {
        if(categoryString === 'All Recipes') {
            return this.setState({ filteredRecipes: this.state.allRecipes })
        }

        const filteredRecipes = this.state.allRecipes.filter(recipe => {
            return recipe.category === categoryString
        })
        
        this.setState({ filteredRecipes })
    }

    render() {
        return (
            <div>
               <header>
                   Welcome
                </header>
               <AddNewRecipeForm 
                    allRecipes={ this.state.allRecipes } 
                    addNewRecipeToState={ this.addNewRecipeToState }
                    newRecipeId={ this.state.newRecipeId }
                />
               <DiscoverRecipesMenu
                    recipes={ this.state.filteredRecipes }
                    allRecipes={ this.state.allRecipes }
                    discoverByCategory={ this.discoverByCategory }
               />
               <RecipesContainer 
                    allRecipes={ this.state.allRecipes }
                    filteredRecipes={ this.state.filteredRecipes }
                />      
            </div>
        )
    }
}
