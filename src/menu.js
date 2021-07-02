const menuContainer = () => {
  const dishes = [
    {
      id: 1,
      name: 'VEAL MINI ESCALOPES',
      img: 'https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_960_720.jpg',
      price: 10,
    },
    {
      id: 2,
      name: 'VEAL MINI ESCALOPES',
      img: 'https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_960_720.jpg',
      price: 10,
    },
    {
      id: 3,
      name: 'VEAL MINI ESCALOPES',
      img: 'https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_960_720.jpg',
      price: 10,
    },
    {
      id: 4,
      name: 'VEAL MINI ESCALOPES',
      img: 'https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_960_720.jpg',
      price: 10,
    },
    {
      id: 5,
      name: 'VEAL MINI ESCALOPES',
      img: 'https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_960_720.jpg',
      price: 10,
    },
    {
      id: 6,
      name: 'VEAL MINI ESCALOPES',
      img: 'https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_960_720.jpg',
      price: 10,
    },
  ];

  const container = document.createElement('div');
  const header = document.createElement('div');
  const details = document.createElement('p');
  const title = document.createElement('h3');
  const subtitle = document.createElement('h1');
  const cardsWrapper = document.createElement('div');

  container.classList += 'menu-page-container flex-start flex-column d-none';
  header.classList += 'header flex-center text-center flex-column';
  subtitle.classList += 'subtitle';
  details.classList += 'details';
  title.classList += 'title';
  cardsWrapper.classList += 'card-main-container';

  title.innerHTML = 'TRY & DISCOVER';
  subtitle.innerHTML = 'OUR DISHES';
  details.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud. Excepteur sint occaecat cupidatat non proident, sunt in culpa. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam!';

  header.appendChild(title);
  header.appendChild(subtitle);
  header.appendChild(details);
  container.appendChild(header);

  dishes.map((dish) => {
    const card = document.createElement('a');
    const overlay = document.createElement('div');
    const name = document.createElement('h4');
    const price = document.createElement('h5');
    const image = document.createElement('img');

    overlay.classList
      += 'card-overlay-wrapper flex-center flex-column text-center';
    name.classList += 'dish-name';
    price.classList += 'dish-price';
    card.classList += 'card-item-wrapper';

    image.setAttribute('src', dish.img);
    image.setAttribute('alt', dish.name);
    name.innerHTML = dish.name;
    price.innerHTML = dish.price;

    overlay.appendChild(name);
    overlay.appendChild(price);
    card.appendChild(overlay);
    card.appendChild(image);

    return cardsWrapper.appendChild(card);
  });

  container.appendChild(cardsWrapper);
  return container;
};

export default menuContainer;
