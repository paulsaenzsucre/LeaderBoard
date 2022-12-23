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

  addScoreViewUi = (scoreViewUi) => this.#listUi.appendChild(scoreViewUi);

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
    this.#listUi = document.createElement('ul');
    this.#listUi.setAttribute('class', 'scoreboard');

    if (this.#presenter.model.length > 0) {
      this.#presenter.model.forEach(
        (scorePresenter) => this.#listUi.appendChild(scorePresenter.view.ui),
      );
    }

    section.appendChild(heading);
    section.appendChild(this.#listUi);
    return section;
  }

  #refresh = () => {}
}

export default ScoreBoardView;