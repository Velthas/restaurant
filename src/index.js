//Load css file
import './style.css';
import generateMenuDivs from './menu.js';
import generateContactDivs from './contact.js';
import generateHomeDivs from './home.js'


const enableTabSwap = (function () {
    
    //Cache DOM
    const navBar = document.querySelector('#navbar');
    const menuOption = navBar.querySelector('#summonMenu');
    const contactsOption = navBar.querySelector('#summonContacts');
    const homeOption = navBar.querySelector('#summonHome');

    function assignEvents() {
    menuOption.addEventListener('click', generateMenuDivs.appendToMenu);
    contactsOption.addEventListener('click', generateContactDivs.appendContacts);
    homeOption.addEventListener('click', generateHomeDivs.appendHomeDivs);
    }

    assignEvents();


})();
