const contactContainer = () => {
  const container = document.createElement('div');
  const header = document.createElement('div');
  const details = document.createElement('p');
  const title = document.createElement('h3');
  const subtitle = document.createElement('h1');
  const contactWrapper = document.createElement('div');
  const form = document.createElement('form');
  const inputsWrapper = document.createElement('div');
  const nameInput = document.createElement('input');
  const emailInput = document.createElement('input');
  const websiteInput = document.createElement('input');
  const messageInput = document.createElement('textarea');
  const inputSubmit = document.createElement('button');
  const messageWrapper = document.createElement('div');

  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('name', 'name');
  nameInput.setAttribute('placeholder', 'Name');
  emailInput.setAttribute('type', 'text');
  emailInput.setAttribute('name', 'Email');
  emailInput.setAttribute('placeholder', 'Email');
  websiteInput.setAttribute('type', 'text');
  websiteInput.setAttribute('name', 'Website');
  websiteInput.setAttribute('placeholder', 'Website');
  messageInput.setAttribute('name', 'Message');
  messageInput.setAttribute('placeholder', 'Message');
  inputSubmit.setAttribute('type', 'submit');
  inputSubmit.setAttribute('class', 'contact-submit-btn');

  container.classList
    += 'contact-page-main-container flex-center flex-column d-none';
  inputsWrapper.classList += 'inputs-wrapper flex-center';
  contactWrapper.classList += 'contact-page-input-area';
  messageWrapper.classList += 'text-area flex-center';
  header.classList += 'header flex-center text-center flex-column';
  subtitle.classList += 'subtitle';
  details.classList += 'details';
  title.classList += 'title';

  title.innerHTML = 'TRY & DISCOVER';
  subtitle.innerHTML = 'CONTACT';
  inputSubmit.innerHTML = 'Send';
  details.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud. Excepteur sint occaecat cupidatat non proident, sunt in culpa. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam!';

  header.appendChild(title);
  header.appendChild(subtitle);
  header.appendChild(details);
  inputsWrapper.appendChild(nameInput);
  inputsWrapper.appendChild(emailInput);
  inputsWrapper.appendChild(websiteInput);
  messageWrapper.appendChild(messageInput);
  form.appendChild(inputsWrapper);
  form.appendChild(messageWrapper);
  form.appendChild(inputSubmit);

  container.appendChild(header);
  contactWrapper.appendChild(form);

  container.appendChild(contactWrapper);

  return container;
};

export default contactContainer;
