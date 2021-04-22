import React, { Component } from 'react'
import CategoryMenu from './CategoryMenuContainer'
import AddNewRecipeForm from '../components/AddNewRecipeForm';
import RecipesContainer from './RecipesContainer';
import DiscoverRecipesMenu from '../components/DiscoverRecipesMenu';

const baseUrl = 'http://localhost:3000'
const recipeUrl = `${baseUrl}/recipes`

export default class PageContainer extends Component {

    state ={
        display: true,
        allRecipes:[],
        newRecipeId: 0,
        appetizers: [],
        // breads: [],
        // cookiesDesserts: [],
        // meats: [],
        // saladsSoups: [],
        // vegetables: [],
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

    // discoverAppetizers = (appetizer) => {
    //     const appetizerRecipes = this.state.allRecipes.filter(recipe => {
    //         (recipe.category === appetizer.category)
    //     })

    //     console.log(appetizersRecipes)
    // }


    viewAllRecipes = () => {
        console.log('recipessssss')
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

               />
               <RecipesContainer allRecipes={this.state.allRecipes}/>      
            </div>
        )
    }
}
