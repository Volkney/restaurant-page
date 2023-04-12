export default function aboutPage() {
  // create child body element and its children
  const bdBody = document.createElement('div');
  bdBody.classList.add('bdBody', 'active');
  const bdContent3 = document.createElement('div');
  bdContent3.classList.add('content', 'text');
  bdContent3.innerHTML = 'Lejla is a silly butt';
  const bdContent1 = document.createElement('div');
  bdContent1.classList.add('content', 'bdPicture');
  bdContent1.textContent = '';
  const bdContent2 = document.createElement('div');
  bdContent2.classList.add('content', 'bdPicture2');
  bdContent2.textContent = '';
  const bdContent4 = document.createElement('div');
  
  // create parent elements
  const bdTextParent = document.createElement('div');
  bdTextParent.classList.add('bd-text-parent');
  const imageParent = document.createElement('div');
  imageParent.classList.add('bd-image-parent');
  // append text div's to images
  imageParent.append(bdContent1, bdContent2);
  // append text div's to parentText
  bdTextParent.append(bdContent3, bdContent4);
  // append content elements to child body
  bdBody.append(imageParent, bdTextParent);
  document.body.appendChild(bdBody);
  return bdBody;
}