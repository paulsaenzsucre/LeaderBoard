class ScoreModel {
  #name;

  #points;

  constructor(name, points) {
    this.#name = name;
    this.#points = points;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  get points() {
    return this.#points;
  }

  set points(value) {
    this.#points = value;
  }

  toJSON = () => ({
    user: this.#name,
    score: this.#points,
  })
}

export default ScoreModel;