import ScorePresenter from './ScorePresenter.js';
import ScoreBoardView from './ScoreBoardView.js';
import LeaderBoardService from './LeaderboardService.js';

class ScoreBoardPresenter {
  #model;

  #view;

  constructor() {
    this.#model = new LeaderBoardService();
    this.#view = new ScoreBoardView(this);
  }

  get view() {
    return this.#view;
  }

  get model() {
    return this.#model;
  }

  scoreUis = async () => {
    const uis = [];
    const presenters = await this.#model.getScores();
    presenters.forEach((scorePresenter) => uis.push(scorePresenter.view.ui));
    return uis;
  }

  addScore = async (scoreName, scorePoints) => {
    const scorePresenter = new ScorePresenter(scoreName, scorePoints);
    await this.#model.postScore(scorePresenter.model);
    await this.#view.refresh(); // Fetching data for better user experience.
  }
}

export default ScoreBoardPresenter;