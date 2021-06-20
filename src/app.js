// app.js
import getAPI from './API';
import initClass from './classFilter';
import initQuiz from './quizFilter';

import './app.css';

let classes;
let quizzes;

getAPI('./class.json').then((res) => {
  classes = res;
  initClass(classes);
});

getAPI('./quiz.json').then((res) => {
  quizzes = res;
  initQuiz(quizzes);
});
