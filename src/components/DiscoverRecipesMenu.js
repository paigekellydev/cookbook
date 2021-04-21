import React, { Component } from 'react'

export default class DiscoverRecipesMenu extends Component {
        
    state = {
        showMenu: false,
        dropdownMenu: null
    };
    
    showMenu = (event) => {        
        this.setState({ showMenu: true })
        document.addEventListener('click', this.closeMenu);
        // when we try to add the closeMenu function, it automatically triggers both showMenu and closeMenu event 
        // listeners
    }
    
    closeMenu = (event) => {
        if (!event.target.classList.contains('drop-down')) {
            this.setState({ showMenu: false });  
            document.removeEventListener('click', this.closeMenu);
        }
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
                    <button> All Recipes </button>
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