import React from 'react'

export default function CategoryMenu() {
    return (
        <section id="categories">
            <button id="appetizers" className="category">
                Appetizers<br></br>
                <img className="category-img" src="https://i.imgur.com/3WudFXY.png" alt="appetizers"/>
            </button>
            <button id="breads" className="category">
                Breads<br></br>
                <img className="category-img" src="https://i.imgur.com/FkVdc6u.png" alt="bread"/>
            </button>
            <button id="desserts" className="category">
                Desserts<br></br>
                <img className="category-img" src="https://i.imgur.com/m6Kuo41.png" alt="cookies"/>
            </button>
            <button id="meats" className="category">
                Meats<br></br>
                <img className="category-img" src="https://i.imgur.com/sIXABUd.png" alt="meat"/>
            </button>
            <button id="pasta" className="category">
                Pasta<br></br>
                <img className="category-img" src="https://i.imgur.com/niIrKuO.png" alt="pasta"/>
            </button>
            <button id="poultry" className="category">
                Poultry<br></br>
                <img className="category-img" src="https://i.imgur.com/hYxcABv.png" alt="poultry"/>
            </button>
            <button id="salad-soups" className="category">
                Salads and Soups<br></br>
                <img className="category-img" src="https://i.imgur.com/ErPuXNA.png" alt="soup"/>
            </button>
            <button id="vegetables" className="category">
                Vegetables<br></br>
                <img className="category-img" src="https://i.imgur.com/mZfci1X.png" alt="vegetables"/>
            </button>
        </section>
    )
}

