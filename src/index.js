import './style.css';
import ScorePresenter from './modules/ScorePresenter.js';

const container = document.getElementById('score-list');
const presenter1 = new ScorePresenter(container, 'Paul', 100);
const presenter2 = new ScorePresenter(container, 'Juan', 50);
const presenter3 = new ScorePresenter(container, 'David', 70);

presenter1.renderView();
presenter2.renderView();
presenter3.renderView();