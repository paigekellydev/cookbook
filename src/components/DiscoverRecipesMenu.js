import React, { Component } from 'react'
import RecipesContainer from '../containers/RecipesContainer'

export default class DiscoverRecipesMenu extends Component {
        
    state = {
        showMenu: false,
        dropdownMenu: null
    };
    
    showMenu = (event) => {        
        this.setState({ showMenu: true })
        document.addEventListener('click', this.closeMenu); 
    }
    
    closeMenu = (event) => {
        if (!event.target.classList.contains('drop-down')) {
            this.setState({ showMenu: false });  
            document.removeEventListener('click', this.closeMenu);
        }
    }

    displayAllRecipes = (event) => {
        return (
             <RecipesContainer /> 
        )
    }

    renderDropDownMenu = () => {
        return (
            this.state.showMenu ? (
                <div
                    className="menu drop-down"
                    ref={(element) => {
                    this.state.dropdownMenu = element;
                    }}
                >
                    <button onClick={this.displayAllRecipes}> All Recipes </button>
                    <button> Appetizers </button>
                    <button> Breads </button>
                    <button> Cookies and Desserts </button>
                    <button> Meats </button>
                    <button> Pasta </button>
                    <button> Poultry </button>
                    <button> Salads and Soups </button>
                    <button> Vegetables </button>
                </div> )
            : ( null )
        )
    }

    render() {
        return (
        <div>
            <button onClick={this.showMenu} className="drop-down">Discover Recipes</button>
            {this.renderDropDownMenu()}
        </div>
        );
    }
}