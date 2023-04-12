export default function homeDisplay() {
  // create child body element and its children
  const childBody = document.createElement('div');
  childBody.classList.add('child', 'body', 'active');
  const content1 = document.createElement('div');
  content1.classList.add('content', 'picture');
  content1.textContent = '';
  const content2 = document.createElement('div');
  content2.classList.add('content', 'picture2');
  content2.textContent = '';
  const content3 = document.createElement('div');
  content3.classList.add('content', 'text');
  content3.innerHTML = '<p>Where Nature -<br><span>Brings the Beauty</span> <br>Est. 1999</p>';
  const content4 = document.createElement('div');
  content4.classList.add('content', 'text-rights');
  content4.textContent = '2023 All Rights Reserved';
  const content5 = document.createElement('div');
  content5.classList.add('content', 'text-quote');
  content5.textContent = 'and then a marble vase, a mystic flower, a star to fall in love with...';
  const content6 = document.createElement('div');
  content6.classList.add('content', 'text-button');
  content6.innerHTML = '<button>Unearth</button>';
  const textParent = document.createElement('div');
  textParent.classList.add('text-parent');
  const imageParent = document.createElement('div');
  imageParent.classList.add('image-parent');
  // append text div's to images
  imageParent.append(content1, content2);
  // append text div's to parentText
  textParent.append(content3, content4, content6, content5);
  // append content elements to child body
  childBody.append(imageParent, textParent);
  return childBody;
}
