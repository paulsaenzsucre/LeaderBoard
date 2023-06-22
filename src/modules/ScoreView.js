import { AvatarGenerator } from 'random-avatar-generator';

class ScoreView {
  #presenter;

  #ui;

  static seedColor = 25;

  constructor(presenter) {
    this.#presenter = presenter;
    this.#ui = this.#createDOMElements();
  }

  get ui() {
    return this.#ui;
  }

  #randomColor = () => {
    const center = 128;
    const width = 127;
    ScoreView.seedColor = ScoreView.seedColor < 80 ? ScoreView.seedColor += 1 : 0;

    const red = Math.round(Math.sin(0.3 * ScoreView.seedColor) * width + center);
    const grn = Math.round(Math.sin(0.3 * ScoreView.seedColor + 2) * width + center);
    const blu = Math.round(Math.sin(0.3 * ScoreView.seedColor + 4) * width + center);
    return `linear-gradient(180deg, rgb(${red}, ${grn}, ${blu}), rgb(${red + 10}, ${grn + 10}, ${blu + 10}))`;
  }

  #createDOMElements = () => {
    const generator = new AvatarGenerator();
    const avatar = generator.generateRandomAvatar();
    let element;
    const div = document.createElement('div');
    div.setAttribute('class', 'score-card');
    element = document.createElement('img');
    element.setAttribute('class', 'avatar');
    element.setAttribute('src', avatar);
    div.appendChild(element);
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
    listItem.style.background = this.#randomColor();
    listItem.appendChild(div);
    return listItem;
  }
}

export default ScoreView;