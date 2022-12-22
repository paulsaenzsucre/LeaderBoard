import ScorePresenter from './ScorePresenter.js';
import ScoreBoardView from './ScoreBoardView.js';

class ScoreBoardPresenter {
  #model;

  #view;

  constructor() {
    this.#view = new ScoreBoardView(this);
    this.#model = [];
  }

  addScore = (scoreName, scorePoints) => {
    const scorePresenter = new ScorePresenter(scoreName, scorePoints);
    this.#model.push(scorePresenter);
    this.#view.addScoreView(scorePresenter.ui);
  }
}

export default ScoreBoardPresenter;