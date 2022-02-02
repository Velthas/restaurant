import cappuccino from './images/cappuccino.png';
import espresso from './images/espresso.png';
import frappuccino from './images/frappuccino.png';
import latte from './images/latte.png';
import smoothie from './images/smoothie.png';
import teacup from './images/tea-cup.png';

const menuHandler = (function () {

    let cappuccinoDescr = "This is a description of a drink served by this coffee house. Gee, don't you think that icon looks exquisite? Must be good"
    let espressoDescr = "I can definitely see a pattern here, I think these guys are trying to sell us coffee. Isn't express something train related?"
    let frappuccinoDescr = "I am not even sure what a frappuccino is. Sounds very burgeoise, or snotty, or pretentious. Or all of them. "
    let latteDescr = "I feel like this would be the kind of drink grunts would prefer. If they didn't breathe methane, that is."
    let smoothieDescr = "Actually they say smoothies are the real secret to bulking, it's much easier to drink than it is to chew and eat."
    let teacupDescr = "I know we are a coffee house and all, but trust me, nothing like a good cuppa o' tea to relax."

    const menuArray =  [
        {'name': 'Cappuccino', 'description': cappuccinoDescr, 'source': cappuccino, 'price': 2.50},
        {'name': 'Espresso', 'description': espressoDescr, 'source': espresso, 'price': 1.00},
        {'name': 'Frappuccino', 'description': frappuccinoDescr, 'source': frappuccino, 'price': 3.50},
        {'name': 'Latte', 'description': latteDescr, 'source': latte, 'price': 2.50},
        {'name': 'Smoothie', 'description': smoothieDescr, 'source': smoothie, 'price': 1.50},
        {'name': 'Teacup', 'description': teacupDescr, 'source': teacup, 'price': 4.50},
    ]

    return {menuArray}

})();

const generateMenuDivs = (function () {

    //Cache DOM
    const contentsDiv = document.querySelector('#contents');


    function createOuterContainers(page) {

        const title = document.createElement('p');
        title.classList.add('menutitle');
        title.textContent = page;

        const menu = document.createElement('div');
        menu.id = 'menu';

        contentsDiv.appendChild(title);
        contentsDiv.appendChild(menu);

    }

    function createMenuEntries() {

        //Assign it to avoid the long name
        const allDishes = menuHandler.menuArray
        //Query menu container to append menu entries to
        const menuContainer = contentsDiv.querySelector('#menu')

        for(let i = 0; i < allDishes.length; i++) {

            //Create the div for the menu entry
            const menuDiv = document.createElement('div');
            menuDiv.classList.add('menuitem');

            //Extract the img src from the array and append it
            const icon = document.createElement('img');
            icon.src = allDishes[i].source;
            menuDiv.appendChild(icon);

            //Etract the name of the dish and append within an h3 tag
            const dishName = document.createElement('h3');
            dishName.textContent = allDishes[i].name;
            menuDiv.appendChild(dishName);

            //Extract description, add it to the paragraph's textcontent and append it
            const descriptionDiv = document.createElement('p');
            descriptionDiv.textContent = allDishes[i].description;
            menuDiv.appendChild(descriptionDiv);

            menuContainer.appendChild(menuDiv);
        }
        
        
    }

    //Rids the page of previous content and updates the hero
    function clearPage(message) {
        document.querySelector('.herotext').textContent = message;
        contentsDiv.textContent = "";

    }

    function appendToMenu() {
        
        clearPage('DISCOVER NEW FLAVORS');
        createOuterContainers('MENU');
        createMenuEntries();

    }

    return {appendToMenu, clearPage, createOuterContainers}

})();

export default generateMenuDivs;