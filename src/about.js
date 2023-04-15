export default function aboutPage() {
  const aboutBody = document.createElement('div');
  aboutBody.classList.add('aboutBody');

  const aboutText = document.createElement('div');
  aboutText.classList.add('aboutText');
  aboutText.innerText = "Viola is a local flower shop that prides itself on providing beautiful, locally-grown flowers and plants for small events and occasions. Our plants are grown with care, using only the best soil and natural fertilizers, to ensure that every arrangement is a work of art. We believe that there's nothing quite like the beauty of freshly-picked flowers, and that's why we hand-pick and carefully arrange every bouquet and centerpiece we create. Our experienced team of florists will work with you to create custom arrangements that perfectly fit your needs and style, whether you're planning a small wedding, birthday party, or just want to brighten up your home with a fresh bouquet. We're committed to supporting local growers and suppliers, and we strive to make a positive impact on the environment by using sustainable and eco-friendly practices. At Viola, we're not just florists - we're members of the community, and we can't wait to help you bring a little bit of natural beauty into your life.";

  const aboutImage = document.createElement('div');
  aboutImage.classList.add('aboutImage');

  aboutBody.append(aboutText, aboutImage);
  return aboutBody;
}
