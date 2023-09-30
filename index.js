import { createElement } from './utils/createElement.js';
import { getImg } from './utils/getImg.js';

class App {
  container = document.body;
  header = createElement({ tagName: 'header' });
  footer = createElement({ tagName: 'footer' });
  main = createElement({ tagName: 'main' });
  headline = createElement({ tagName: 'h1', text: 'Unsplash API' });
  logoContainer = createElement({ tagName: 'div', className: 'logo-container' });
  logo = getImg('./assets/logo.svg', 'logo');
  searchContainer = createElement({ tagName: 'div', className: 'search-container' });
  clearInput = createElement({ tagName: 'button', className: 'clear-btn' });
  search = createElement({ tagName: 'input', className: 'search' });
  rsLogo = createElement({ tagName: 'a' });
  year = createElement({ tagName: 'p', text: '2023' });
  ghLink = createElement({ tagName: 'a', text: 'Yauheni Belski' });

  constructor() {
    this.search.type = 'name';
    this.search.placeholder = 'Search...';
  }

  appendElementsInDOM() {
    this.logoContainer.append(this.logo);
    this.logoContainer.append(this.headline);

    this.searchContainer.append(this.search);
    this.searchContainer.append(this.clearInput);

    this.header.append(this.logoContainer);
    this.header.append(this.searchContainer)

    this.footer.append(this.rsLogo);
    this.footer.append(this.ghLink);
    this.footer.append(this.year);

    this.container.append(this.header);
    this.container.append(this.main);
    this.container.append(this.footer);
  }

  render() {

  }

  run() {
    this.appendElementsInDOM();
  }
}

const app = new App();

app.run();