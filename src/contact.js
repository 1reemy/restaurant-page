import './home.css';
import render from './navbar';

const contact = () =>{
    const contents = document.createElement('div');
    const contact = document.createElement('h1');
    const address = document.createElement('p');
    const tele = document.createElement('p');
    const email = document.createElement('p'); 

    contact.textContent = "Contact Us";

    contents.classList.add('contact');
    address.textContent = "225 1/2 Marcus Garvey Drive Kingston Jamaica";
    tele.textContent = "Tel: (876)553-6813";
    email.textContent = "info@ghcfoods.com";
    contents.appendChild(contact);
    contents.appendChild(address);
    contents.appendChild(tele);
    contents.appendChild(email);

    return contents;    
};
const contactPage = () => {    
    const page = document.querySelector('#content');

    page.classList.add('home');
    page.textContent = '';
    render();
    page.appendChild(contact());
}
export default contactPage;