import './content.css';
import './home.css'; 
import Logo from './LOGO.jpg';
import render from './navbar.js';

const home = () =>{
    const contents = document.createElement('div');
    const welcome = document.createElement('h1');
    const copy = document.createElement('h2'); 

    const image = new Image();

    welcome.textContent = "Welcome to the Sizzla Restaurant!";

    image.src = Logo;
    image.alt = "Bird";

    contents.classList.add('style');
    copy.textContent = "The best restaurant in Jamaica!";
    contents.appendChild(welcome);
    contents.appendChild(image);
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