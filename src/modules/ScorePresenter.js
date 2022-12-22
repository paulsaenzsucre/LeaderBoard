import ScoreModel from './ScoreModel.js';
import ScoreView from './ScoreView.js';

class ScorePresenter {
  #model;

  #view;

  constructor(container, name, points) {
    this.#model = new ScoreModel(name, points);
    this.#view = new ScoreView(container, this);
  }

  get Model() {
    return this.#model;
  }

  get View() {
    return this.#view;
  }

  renderView = () => this.#view.render();
}

export default ScorePresenter;