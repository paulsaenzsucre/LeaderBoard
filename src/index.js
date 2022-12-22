import './style.css';
import ScorePresenter from './modules/ScorePresenter.js';
import ScoreView from './modules/ScoreView.js';

const container = document.getElementById('score-list');
const presenter = new ScorePresenter();
const view = new ScoreView(container, presenter);
const view2 = new ScoreView(container, presenter);
const view3 = new ScoreView(container, presenter);
view.render();
view2.render();
view3.render();