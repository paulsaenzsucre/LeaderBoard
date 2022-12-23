class ScoreBoardView {
  #presenter;

  #listUi;

  #ui;

  constructor(presenter) {
    this.#presenter = presenter;
    this.#ui = this.#createDOMElements();
  }

  get ui() {
    return this.#ui;
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
    btn.addEventListener('click', this.refresh);
    heading.appendChild(btn);
    this.#listUi = document.createElement('ul');
    this.#listUi.setAttribute('class', 'scoreboard');
    this.refresh();
    section.appendChild(heading);
    section.appendChild(this.#listUi);
    return section;
  }

  refresh = async () => {
    const uis = await this.#presenter.scoreUis();
    this.#listUi.replaceChildren(...uis);
  }
}

export default ScoreBoardView;