import './about.css';
import './home.css';
import render from './navbar';

const about = () =>{
    const contents = document.createElement('div');
    const about = document.createElement('h1');
    const copy = document.createElement('p'); 

    about.textContent = "About Us";

    contents.classList.add('about');
    copy.textContent = "Using our no MSG added all natural ingredients, Sizzla Restaurant is dedicated to providing the best dining experience which not only tastes good, but is also healthy!";
    contents.appendChild(about);
    contents.appendChild(copy);

    return contents;    
};
const aboutPage = () => {    
    const page = document.querySelector('#content');

    page.classList.add('home');
    page.textContent = '';
    render();
    page.appendChild(about());
}
export default aboutPage;