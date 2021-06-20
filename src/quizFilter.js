import { renderQuizzes, hideQuizSpinner } from './quizRenderer';

const $quizFilterAllBtn = document.querySelector(
  '.container>.titlewrap:nth-child(4)>.btnwrap>.btn-group>button:nth-child(1)',
);
const $quizFilterGitBtn = document.querySelector(
  '.container>.titlewrap:nth-child(4)>.btnwrap>.btn-group>button:nth-child(2)',
);

let activeFilterBtn;

function getAllItems(items) {
  return items.filter((item) => true);
}

function getItemsWithGit(items) {
  return items.filter((item) => item.gitUrl !== '');
}

function setFilter(button, filteredData) {
  button.addEventListener('click', (event) => {
    activeFilterBtn.classList.remove('active');
    activeFilterBtn = event.target;
    activeFilterBtn.classList.add('active');
    renderQuizzes(filteredData);
  });
}

export default function initClass(data) {
  hideQuizSpinner();
  activeFilterBtn = $quizFilterAllBtn;
  setFilter($quizFilterAllBtn, getAllItems(data));
  setFilter($quizFilterGitBtn, getItemsWithGit(data));
  renderQuizzes(data);
}
