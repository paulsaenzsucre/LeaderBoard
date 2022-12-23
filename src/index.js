import './style.css';
import ScoreBoardPresenter from './modules/ScoreBoardPresenter.js';
import ScoreFormPresenter from './modules/ScoreFormPresenter.js';

(() => {
  const container = document.getElementById('container');
  const scoreboard = new ScoreBoardPresenter();
  const scoreform = new ScoreFormPresenter(scoreboard);
  container.appendChild(scoreboard.view.ui);
  container.appendChild(scoreform.view.ui);
}) ();