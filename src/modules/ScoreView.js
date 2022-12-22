class ScoreView {
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
    let element;
    const div = document.createElement('div');
    div.setAttribute('class', 'score-card');
    element = document.createElement('p');
    element.innerText = this.#presenter.Model.Name;
    element.setAttribute('class', 'score-name');
    div.appendChild(element);
    element = document.createElement('p');
    element.innerText = this.#presenter.Model.Points;
    element.setAttribute('class', 'score-points');
    div.appendChild(element);
    const listItem = document.createElement('li');
    listItem.setAttribute('class','score-list-item');
    listItem.appendChild(div);
    return listItem;
  }
}

export default ScoreView;