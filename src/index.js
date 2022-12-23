import './style.css';
import ScoreBoardPresenter from './modules/ScoreBoardPresenter.js';
import ScoreFormPresenter from './modules/ScoreFormPresenter';

const container = document.getElementById('container');
const scoreboard = new ScoreBoardPresenter();
const scoreform = new ScoreFormPresenter(scoreboard);
scoreboard.addScore('Paul', 100);
scoreboard.addScore('Juan', 50);
scoreboard.addScore('David', 70);

container.appendChild(scoreboard.view.ui);
container.appendChild(scoreform.view.ui);
