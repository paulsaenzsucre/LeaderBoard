class ScoreView {
  #presenter;

  #ui;

  constructor(presenter) {
    this.#presenter = presenter;
    this.#ui = this.#createDOMElements();
  }

  get ui() {
    return this.#ui;
  }

  #createDOMElements = () => {
    let element;
    const div = document.createElement('div');
    div.setAttribute('class', 'score-card');
    element = document.createElement('p');
    element.innerText = this.#presenter.model.name;
    element.setAttribute('class', 'score-name');
    div.appendChild(element);
    element = document.createElement('p');
    element.innerText = this.#presenter.model.points;
    element.setAttribute('class', 'score-points');
    div.appendChild(element);
    const listItem = document.createElement('li');
    listItem.setAttribute('class', 'score-list-item');
    listItem.appendChild(div);
    return listItem;
  }
}

export default ScoreView;