class ScoreBoardView {
  #presenter;

  #ui;

  constructor(presenter) {
    this.#presenter = presenter;
    this.#ui = this.#createDOMElements();
  }

  get ui() {
    return this.#ui;
  }

  addScoreViewUi = (scoreViewUi) => this.#ui.appendChild(scoreViewUi);

  #createDOMElements = () => {
    const scoreList = document.createElement('ul');
    scoreList.setAttribute('class', 'scoreboard');

    if (this.#presenter.model.length > 0) {
      this.#presenter.model.forEach(
        (scorePresenter) => scoreList.appendChild(scorePresenter.view.ui),
      );
    }

    return scoreList;
  }
}

export default ScoreBoardView;