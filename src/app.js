// app.js
import getAPI from './API';
import initClass from './classFilter';
import initQuiz from './quizFilter';

let classes;
let quizzes;

getAPI('./json/class.json').then((res) => {
  classes = res;
  initClass(classes);
});

getAPI('./json/quiz.json').then((res) => {
  quizzes = res;
  initQuiz(quizzes);
});
