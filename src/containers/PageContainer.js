import React, { Component } from 'react'
import CategoryMenu from './CategoryMenuContainer'
import AddNewRecipeForm from '../components/AddNewRecipeForm';
import RecipesContainer from './RecipesContainer';
import DiscoverRecipesMenu from '../components/DiscoverRecipesMenu';

export default class HomePageContainer extends Component {

    state ={
        display: true
    }


    // <CategoryMenu />
    // <AddRecipeForm allRecipes={ this.state.allRecipes }/>
    // <RecipesContainer allRecipes={ this.state.allRecipes }/>

    // viewAllRecipes will be a drop down menu with category selection, once a category is selected it
    // will filter out recipes that don't match

    // handleClick will just take you a the form to submit new recipe

    // handleAddRecipe = (event) => {
    //     return <AddNewRecipeForm />
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
               <AddNewRecipeForm />
               <DiscoverRecipesMenu />              
            </div>
        )
    }
}
