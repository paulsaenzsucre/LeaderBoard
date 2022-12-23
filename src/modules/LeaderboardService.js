class LeaderBoardService {
  #baseUrl;

  constructor() {
    this.#baseUrl = new URL('FhzaUvi7V3nF1ff0az0S',
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games')
  }

  getScores = async () => {
    const response = await fetch(new URL('scores', this.#baseUrl))
      .then((response) => response.json());

    return response.result;
  }

  postScore = async (scoreModel) => {
    const response = await fetch(new URL('scores', this.#baseUrl) , {
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
