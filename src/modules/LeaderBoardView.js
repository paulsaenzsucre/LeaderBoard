class LeaderBoardView {
  #container;

  #presenter;

  #ui;

  constructor(container, presenter) {
    this.#container = container;
    this.#presenter = presenter;
    this.#ui = this.#createDOMElements();
  }

  render = () => {
    this.#container.appendChild(this.#ui);
  }

  #createDOMElements = () => {
    const section = document.createElement('section');
    section.setAttribute('class', 'scoreboard-cont');
    const heading = document.createElement('div');
    heading.setAttribute('class', 'heading-cont');
    const title = document.createElement('h2');
    title.setAttribute('class', 'scoreboard-title');
    title.innerText = 'Recent scores';
    heading.appendChild(title);
    const btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', 'refresh-btn');
    btn.innerText = 'Refresh';
    btn.addEventListener('click', this.#refresh());
    heading.appendChild(btn);

    section.appendChild(heading);
    section.appendChild(ul);
    return section;
  }

  #refresh = () => {};
}