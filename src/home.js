import './home.css'; 
import Logo from './LOGO.jpg';
import render from './navbar.js';

const home = () =>{
    const contents = document.createElement('div');
    const welcome = document.createElement('h1');
    const copy = document.createElement('h2');
    const link = document.createElement('a'); 

    const image = new Image();

    welcome.textContent = "Welcome to the Sizzla Restaurant!";

    
    link.appendChild(image);
    
    image.title = "GHC Foods";
    image.src = Logo;
    image.alt = "Bird";
    link.href = 'https://www.ghcfoods.com/';

    contents.classList.add('style');
    copy.textContent = "The best restaurant in Jamaica!";
    contents.appendChild(welcome);
    contents.appendChild(link);
    contents.appendChild(copy);

    return contents;    
};
const homePage = () => {    
    const page = document.querySelector('#content');
    
    page.classList.add('home');
    page.textContent = '';
    render();
    page.appendChild(home());
}
export default homePage;