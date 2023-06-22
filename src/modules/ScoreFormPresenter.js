import ScoreFormView from './ScoreFormView.js';

class ScoreFormPresenter {
  #scoreBoard;

  #view;

  constructor(scoreBoardPresenter) {
    this.#view = new ScoreFormView(this);
    this.#scoreBoard = scoreBoardPresenter;
  }

  get view() {
    return this.#view;
  }

  submit = (scoreName, scorePoints) => {
    this.#scoreBoard.addScore(scoreName, scorePoints);
  }
}

export default ScoreFormPresenter;