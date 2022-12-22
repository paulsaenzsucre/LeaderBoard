import './style.css';
import ScoreBoardPresenter from './modules/ScoreBoardPresenter.js';

const container = document.getElementById('container');
const presenter = new ScoreBoardPresenter();
presenter.addScore('Paul', 100);
presenter.addScore('Juan', 50);
presenter.addScore('David', 70);

container.appendChild(presenter.view.ui);
