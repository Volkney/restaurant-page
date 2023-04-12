import './reset.css';
import './style.css';
import headerDisplay from './header';
import homeDisplay from './home';
import birthdayPage from './occasions';

// create parent element
const parent = document.createElement('div');
parent.classList.add('parent');
document.body.append(parent);
// initial home page
const home = homeDisplay();
const birthday = birthdayPage();
parent.appendChild(headerDisplay());
parent.appendChild(home);
// add buttons from header.js
const homeBtn = document.querySelector('.viola');
const birthdayBtn = document.querySelector('.birthday');
const plantsBtn = document.querySelector('.plants');
const aboutBtn = document.querySelector('.about');

homeBtn.addEventListener('click', () => {
  [birthdayBtn, plantsBtn, aboutBtn].forEach((button) => {
    button.classList.remove('active');
  });
  homeBtn.classList.add('active');
  // Remove current page and reassign its value
  parent.removeChild(parent.childNodes[1]);
  parent.appendChild(homeDisplay());
});

birthdayBtn.addEventListener('click', () => {
  [homeBtn, plantsBtn, aboutBtn].forEach((button) => {
    button.classList.remove('active');
  });
  birthdayBtn.classList.add('active');
  // Remove current page and reassign its value
  parent.removeChild(parent.childNodes[1]);
  parent.appendChild(birthday);
});
