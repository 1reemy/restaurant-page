import homePage from './home.js';
import aboutPage from './about.js';
import menuPage from './menu.js';
import contactPage from './contact.js'
import './nav.css';

const loadPage = () => {
    const navBar = document.createElement('nav');
    const landingPage = document.createElement('div');
    const about = document.createElement('div');
    const menu = document.createElement('div');
    const contact = document.createElement('div');

    navBar.textContent = "Sizzla Restaurant";
    landingPage.textContent = "Home";
    landingPage.addEventListener('click', () => {
        homePage();
    });
    about.textContent = "About";
    about.addEventListener('click', () => {
        aboutPage();
    });
    menu.textContent = "Menu";
    menu.addEventListener('click', () => {
        menuPage();
    })
    contact.textContent = "Contact";
    contact.addEventListener('click',()=>{
        contactPage();
    })
    
    navBar.appendChild(landingPage);
    navBar.appendChild(about);
    navBar.appendChild(menu);
    navBar.appendChild(contact);

    return navBar
}

const render = () => {
    const nav = document.querySelector('#content');
    nav.classList.add('nav');
    nav.appendChild(loadPage());
}
export default render;