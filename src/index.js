import './reset.css';
import './style.css';
import Vase from './images/marble_vase.png';
// create parent element
const parent = document.createElement('div');
parent.classList.add('parent');

// create child header element
const childHeader = document.createElement('div');
childHeader.classList.add('child', 'header');
// create header1 element and its children
const header1 = document.createElement('div');
header1.classList.add('header1', 'head');
const item1 = document.createElement('div');
item1.classList.add('item', 'one');
item1.textContent = 'Birthday';
const item2 = document.createElement('div');
item2.classList.add('item', 'two');
item2.textContent = 'Plants';
const item3 = document.createElement('div');
item3.classList.add('item', 'three');
item3.textContent = 'Occasions';

// append items to header1
header1.append(item1, item2, item3);

// create header2 element and its child
const header2 = document.createElement('div');
header2.classList.add('header2', 'head');
const item4 = document.createElement('div');
item4.classList.add('item', 'four');
item4.textContent = 'VIOLA';

// append item to header2
header2.appendChild(item4);

// create header3 element and its children
const header3 = document.createElement('div');
header3.classList.add('header3', 'head');
const item5 = document.createElement('div');
item5.classList.add('item', 'five');
item5.textContent = 'Dribble';
const item6 = document.createElement('div');
item6.classList.add('item', 'six');
item6.textContent = 'Github';
const item7 = document.createElement('div');
item7.classList.add('item', 'seven');
item7.textContent = 'Figma';

// append items to header3
header3.append(item5, item6, item7);

// append header elements to child header
childHeader.append(header1, header2, header3);

// create child body element and its children
const childBody = document.createElement('div');
childBody.classList.add('child', 'body');
const content1 = document.createElement('div');
content1.classList.add('content', 'picture');
content1.textContent = '1';
const content2 = document.createElement('div');
content2.classList.add('content', 'picture2');
content2.textContent = '2';
const content3 = document.createElement('div');
content3.classList.add('content', 'text');
content3.textContent = '33';

// append content elements to child body
childBody.append(content1, content2, content3);

// append child header and child body to parent
parent.append(childHeader, childBody);

// append parent to the document body
document.body.appendChild(parent);
