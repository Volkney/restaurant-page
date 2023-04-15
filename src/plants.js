import bikeImage from './plants_pictures/bike.jpg';
import bouquetImage from './plants_pictures/bouquet.jpg';
import orchidsImage from './plants_pictures/orchids.jpg';
import puffyFlowersImage from './plants_pictures/puffy_flowers.jpg';
import purpleVaseImage from './plants_pictures/purple_vase.jpg';
import tomoeImage from './plants_pictures/tomoe.jpg';
import valentinesImage from './plants_pictures/valentines.jpg';
import wormFlowersImage from './plants_pictures/worm_flowers.jpg';

export default function plantsPage() {
  // select the main element
  const plantBody = document.createElement('main');
  plantBody.classList.add('plantBody');
  // create an unordered list element
  const ul = document.createElement('ul');
  // define the array of image sources and alt attributes
  const images = [
    { src: bikeImage, alt: 'white', caption: 'A beautiful white bike with flowers' },
    { src: bouquetImage, alt: 'yellow', caption: 'A lovely yellow bouquet of flowers' },
    { src: orchidsImage, alt: 'white', caption: 'A stunning white orchid' },
    { src: puffyFlowersImage, alt: 'red', caption: 'Fluffy red flowers' },
    { src: purpleVaseImage, alt: 'yellow', caption: 'A yellow flower in a purple vase' },
    { src: tomoeImage, alt: 'white', caption: 'A white flower with green leaves' },
    { src: valentinesImage, alt: 'white', caption: 'A romantic bouquet of flowers for Valentine\'s Day' },
    { src: wormFlowersImage, alt: 'white', caption: 'A unique flower with worm-like petals' },
  ];

  // loop through the images array and create a list item element for each image
  images.forEach((image) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    li.appendChild(img);
    const figcaption = document.createElement('figcaption');
    figcaption.innerText = image.caption;
    li.appendChild(figcaption);
    ul.appendChild(li);

    // add a hover effect to the figure element
    img.addEventListener('mouseenter', () => {
      figcaption.style.opacity = 1;
    });
    img.addEventListener('mouseleave', () => {
      figcaption.style.opacity = 0;
    });
  });

  // add the unordered list element to the main element
  plantBody.appendChild(ul);
  return plantBody;
}
