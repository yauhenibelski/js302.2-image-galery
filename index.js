import { getImgs } from './utils/api.js';
import { createElement } from './utils/createElement.js';
import { getImgElem } from './utils/getImgElem.js';

class App {
  container = document.body;
  header = createElement({ tagName: 'header' });
  footer = createElement({ tagName: 'footer' });
  main = createElement({ tagName: 'main' });
  headline = createElement({ tagName: 'h1', text: 'Unsplash API' });
  logoContainer = createElement({ tagName: 'div', className: 'logo-container' });
  logo = getImgElem('./assets/logo.svg', 'logo');
  searchContainer = createElement({ tagName: 'div', className: 'search-container' });
  clearInput = createElement({ tagName: 'button', className: 'clear-btn' });
  search = createElement({ tagName: 'input', className: 'search' });
  rsLogo = createElement({ tagName: 'a', className: 'rs-logo' });
  year = createElement({ tagName: 'span', text: '2023' });
  ghLink = createElement({ tagName: 'a', text: 'Yauheni Belski', className: 'gh-link' });
  errorMessage = createElement({ tagName: 'h2', text: 'Oops... Server error =(', className: 'error-message' });

  constructor() {
    this.search.type = 'name';
    this.search.placeholder = 'Search...';

    this.rsLogo.href = 'https://rs.school/js-stage0/';
    this.ghLink.href = 'https://github.com/yauhenibelski';

    this.search.onfocus = () => {
      document.onkeydown = (e) => {
        if (e.key === 'Enter') {
          this.render(this.search.value);
        }
      }
    }
    this.search.onchange = (e) => {
      this.render(e.target.value);
      document.onkeydown = null;
    };
    this.clearInput.onclick = () => this.search.value ? this.search.value = '' : false;
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

  async render(val) {
    this.main.innerHTML = '';
    try {
      const result = await getImgs(val);
      const imgs = await Promise.all(result.results.map((val) => getImgElem(val.urls.regular)));

      imgs.forEach(elem => {
        const imgContainer = createElement({ tagName: 'div', className: 'img-container' });
        imgContainer.append(elem);

        this.main.append(imgContainer);
      });

    } catch {
      this.main.append(this.errorMessage);
    }
  }

  run() {
    this.appendElementsInDOM();
    this.render();
  }
}

const app = new App();
app.run();