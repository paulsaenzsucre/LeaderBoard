import ScoreModel from './ScoreModel.js';
import ScoreView from './ScoreView.js';

class ScorePresenter {
  #model;

  #view;

  constructor(name, points) {
    this.#model = new ScoreModel(name, points);
    this.#view = new ScoreView(this);
  }

  get model() {
    return this.#model;
  }

  get view() {
    return this.#view;
  }
}

export default ScorePresenter;