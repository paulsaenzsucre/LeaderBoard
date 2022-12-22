class ScorePresenter {
  constructor() {
    this.name = 'Paul';
    this.points = 157;
  }

  get getName() {
    return this.name;
  }

  get getPoints() {
    return this.points;
  }
}

export default ScorePresenter;