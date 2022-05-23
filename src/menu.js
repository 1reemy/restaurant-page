import './home.css';
import render from './navbar';
import Fries from './fries.jpg';
import Jerk from './jerk.jpg';
import Pudding from './pudding.png';
import Beer from './beer.jpg';

const entree = () =>{
    const entree = document.createElement('div');
    const entreeTitle = document.createElement('h1');
    const entreePara = document.createElement('p');
    const entreeImage = new Image();
    entreeTitle.textContent = "Entree";
    entreePara.textContent = "Seasoned Fries"; 
    entreeImage.src = Fries;   

    entree.classList.add('course');
    entree.appendChild(entreeTitle);
    entree.appendChild(entreeImage);
    entree.appendChild(entreePara);

    return entree;
};

const main = () => {
    const main = document.createElement('div');
    const mainTitle = document.createElement('h1');
    const mainPara = document.createElement('p');
    const link = document.createElement('a');
    const mainImage = new Image();
    
    link.appendChild(mainImage);

    mainTitle.textContent = "Main";
    mainPara.textContent = "Jerk Salmon";
    mainImage.src = Jerk;
    mainImage.title = "Click To See Main Ingredients!"
    link.href = 'https://www.ghcfoods.com/products';

    main.classList.add('course');
    main.appendChild(mainTitle);
    main.appendChild(link);
    main.appendChild(mainPara);

    return main;
};

const desert = () => {
    const desert = document.createElement('div');
    const desertTitle = document.createElement('h1');
    const desertPara = document.createElement('p');
    const desertImage = new Image();
    desertTitle.textContent = "Desert";
    desertPara.textContent = "Potato Pudding";
    desertImage.src = Pudding;

    desert.classList.add('course');
    desert.appendChild(desertTitle);
    desert.appendChild(desertImage);
    desert.appendChild(desertPara);

    return desert;
};

const drink = () => {
    const drink = document.createElement('div');
    const drinkTitle = document.createElement('h1');
    const drinkPara = document.createElement('p');
    const drinkImage = new Image();
    drinkTitle.textContent = "Drink";
    drinkPara.textContent = "Beer";
    drinkImage.src = Beer;

    drink.classList.add('course');
    drink.appendChild(drinkTitle);
    drink.appendChild(drinkImage);
    drink.appendChild(drinkPara);

    return drink;
};
const menu = () => {
    const menu = document.createElement('div');
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = "Menu";

    menu.classList.add('menu');
    menu.appendChild(menuTitle);
    menu.appendChild(entree());
    menu.appendChild(main());
    menu.appendChild(desert());
    menu.appendChild(drink());

    return menu;
};

const menuPage = () => {    
    const page = document.querySelector('#content');

    page.classList.add('home');
    page.textContent = '';
    render();
    page.appendChild(menu());
}
export default menuPage;