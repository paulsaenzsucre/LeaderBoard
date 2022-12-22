class ScoreModel {
  #name;

  #points;

  constructor(name, points) {
    this.#name = name;
    this.#points = points;
  }

  get Name() {
    return this.#name;
  }

  set Name(value) {
    this.#name = value;
  }

  get Points() {
    return this.#points;
  }

  set Points(value) {
    this.#points = value;
  }
}

export default ScoreModel;