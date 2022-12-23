class ScoreFormView {
  #presenter;

  #form;

  #name;

  #points;

  #ui;

  constructor(presenter) {
    this.#presenter = presenter;
    this.#ui = this.#createDOMElements();
  }

  get ui() {
    return this.#ui;
  }

  #createDOMElements = () => {
    const section = document.createElement('section');
    section.setAttribute('class', 'score-form-cont');
    this.#form = document.createElement('form');
    this.#form.setAttribute('class', 'score-form');
    this.#form.addEventListener('submit', this.#submit);
    section.appendChild(this.#form);
    const title = document.createElement('h2');
    title.setAttribute('class', 'form-title');
    title.innerText = 'Add your score';
    this.#form.appendChild(title);
    let label = document.createElement('label');
    this.#name = document.createElement('input');
    this.#name.setAttribute('type', 'text');
    this.#name.setAttribute('placeholder', 'Your name');
    this.#name.required = true;
    label.appendChild(this.#name);
    this.#form.appendChild(label);
    label = document.createElement('label');
    this.#points = document.createElement('input');
    this.#points.setAttribute('type', 'text');
    this.#points.setAttribute('placeholder', 'Your score');
    this.#points.required = true;
    label.appendChild(this.#points);
    this.#form.appendChild(label);
    const input = document.createElement('input');
    input.setAttribute('type', 'submit');
    input.setAttribute('class', 'form-btn');
    this.#form.appendChild(input);

    return section;
  }

  #submit = (evt) => {
    evt.preventDefault();
    this.#presenter.submit(this.#name.value, this.#points.value);
    this.#reset();
  }

  #reset = () => this.#form.reset();
}

export default ScoreFormView;
