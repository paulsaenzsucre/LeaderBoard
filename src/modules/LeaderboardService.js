import ScorePresenter from './ScorePresenter.js';

class LeaderBoardService {
  #baseUrl;

  constructor() {
    this.#baseUrl = new URL('/api/games/FhzaUvi7V3nF1ff0az0S/scores',
      'https://us-central1-js-capstone-backend.cloudfunctions.net');
  }

  getScores = async () => {
    const scorePresenters = [];
    const scores = await fetch(this.#baseUrl)
      .then((response) => response.json())
      .then((json) => json.result.sort((a, b) => b.score - a.score));
    scores.forEach(({ user, score }) => scorePresenters.push(new ScorePresenter(user, score)));

    return scorePresenters;
  }

  postScore = async (scoreModel) => {
    const response = await fetch(this.#baseUrl, {
      method: 'POST',
      body: JSON.stringify(scoreModel),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json());

    return response.result;
  }
}

export default LeaderBoardService;
