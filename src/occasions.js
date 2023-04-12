export default function birthdayPage() {
  // create child body element and its children
  const bdBody = document.createElement('div');
  bdBody.classList.add('bdBody', 'active');
  const bdContent1 = document.createElement('div');
  bdContent1.classList.add('occasion-title');
  bdContent1.innerHTML = 'From delicate bouquets for weddings to grand centerpieces for anniversaries and heartfelt sympathy arrangements for funerals.';
  const bdContent2 = document.createElement('div');
  bdContent2.classList.add('content', 'bdPicture');
  bdContent2.textContent = '';
  const bdContent3 = document.createElement('div');
  bdContent3.classList.add('content', 'bdPicture2');
  bdContent3.textContent = '';
  const bdContent4 = document.createElement('div');
  bdContent4.classList.add('content', 'bdPicture3');
  bdContent4.textContent = '';
  // create parent elements
  const bdTextParent = document.createElement('div');
  bdTextParent.classList.add('bd-text-parent');
  // append text div's to parentText
  bdTextParent.append(bdContent1);
  // append content elements to child body
  bdBody.append(bdTextParent, bdContent2, bdContent3, bdContent4);
  return bdBody;
}
