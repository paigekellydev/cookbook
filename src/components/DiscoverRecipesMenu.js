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

    handleClick = (event) => {
        this.props.discoverByCategory(event.target.textContent)
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
                    <button onClick={this.handleClick}>All Recipes</button>
                    <button onClick={this.handleClick}>Appetizers</button>
                    <button onClick={this.handleClick}>Breads</button>
                    <button onClick={this.handleClick}>Cookies and Desserts</button>
                    <button onClick={this.handleClick}>Meats</button>
                    <button onClick={this.handleClick}>Pasta</button>
                    <button onClick={this.handleClick}>Poultry</button>
                    <button onClick={this.handleClick}>Salads and Soups</button>
                    <button onClick={this.handleClick}>Vegetables</button>
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