import ScorePresenter from './ScorePresenter.js';
import ScoreBoardView from './ScoreBoardView.js';

class ScoreBoardPresenter {
  #model;

  #view;

  constructor() {
    this.#model = [];
    this.#view = new ScoreBoardView(this);
  }

  get view() {
    return this.#view;
  }

  get model() {
    return this.#model;
  }

  addScore = (scoreName, scorePoints) => {
    const scorePresenter = new ScorePresenter(scoreName, scorePoints);
    this.#model.push(scorePresenter);
    this.#view.addScoreViewUi(scorePresenter.view.ui);
  }
}

export default ScoreBoardPresenter;