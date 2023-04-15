export default function headerDisplay() {
  // create header element
  const header = document.createElement('div');
  header.classList.add('child', 'header');
  // create header1 element and its children
  const header1 = document.createElement('div');
  header1.classList.add('header1', 'head');
  const birthday = document.createElement('div');
  birthday.classList.add('item', 'birthday');
  birthday.textContent = 'Occasions';
  const plants = document.createElement('div');
  plants.classList.add('item', 'plants');
  plants.textContent = 'Plants';
  const about = document.createElement('div');
  about.classList.add('item', 'about');
  about.textContent = 'About';

  // append items to header1
  header1.append(birthday, plants, about);

  // create header2 element and its child
  const header2 = document.createElement('div');
  header2.classList.add('header2', 'head');
  const viola = document.createElement('div');
  viola.classList.add('item', 'four', 'viola');
  viola.textContent = 'VIOLA';

  // append item to header2
  header2.appendChild(viola);

  // create header3 element and its children
  const header3 = document.createElement('div');
  header3.classList.add('header3', 'head');

  const item5 = document.createElement('a'); // Change div element to anchor (a) element
  item5.classList.add('item', 'five');
  item5.textContent = 'Dribble';
  item5.href = 'https://dribbble.com/shots/16882751-Bloom-Shop-Design-Concept/attachments/11946349?mode=media'; // Add href attribute with the link URL
  const item6 = document.createElement('a'); // Change div element to anchor (a) element
  item6.classList.add('item', 'six');
  item6.textContent = 'Github';
  item6.href = 'https://github.com/Volkney'; // Add href attribute with the link URL

  const item7 = document.createElement('a'); // Change div element to anchor (a) element
  item7.classList.add('item', 'seven');
  item7.textContent = 'Figma';
  item7.href = 'https://www.figma.com/file/N19dSEkInQ6ma84QxobAuX/Flower-Shop?node-id=0-1&t=Ouy3hf0OxlzqSoDr-0'; // Add href attribute with the link URL
  // append items to header3
  header3.append(item5, item6, item7);

  // append header elements to child header
  header.append(header1, header2, header3);
  return header;
}
