import { renderClasses, hideClassSpinner } from './classRenderer';

const $classFilterAllBtn = document.querySelector(
  '.container>.titlewrap:nth-child(1)>.btnwrap>.btn-group>button:nth-child(1)',
);
const $classFilterLinkBtn = document.querySelector(
  '.container>.titlewrap:nth-child(1)>.btnwrap>.btn-group>button:nth-child(2)',
);
const $classFilterGitBtn = document.querySelector(
  '.container>.titlewrap:nth-child(1)>.btnwrap>.btn-group>button:nth-child(3)',
);
const $classFilterRecentBtn = document.querySelector(
  '.container>.titlewrap:nth-child(1)>.btnwrap>.btn-group>button:nth-child(4)',
);

let activeFilterBtn;

function getAllItems(items) {
  return items.filter((item) => true);
}

function getItemsWithLinks(items) {
  return items.filter((item) => item.links.length > 0);
}

function getItemsWithGit(items) {
  return items.filter((item) => item.gitUrl !== '');
}

function getItemsSortedByRecent(items) {
  return Array.from(items).sort((d1, d2) => {
    if (new Date(d1.date) > new Date(d2.date)) return -1;
    if (new Date(d1.date) < new Date(d2.date)) return 1;
    return 0;
  });
}

function setFilter(button, filteredData) {
  button.addEventListener('click', (event) => {
    activeFilterBtn.classList.remove('active');
    activeFilterBtn = event.target;
    activeFilterBtn.classList.add('active');
    renderClasses(filteredData);
  });
}

export default function initClass(data) {
  hideClassSpinner();
  activeFilterBtn = $classFilterAllBtn;
  setFilter($classFilterAllBtn, getAllItems(data));
  setFilter($classFilterLinkBtn, getItemsWithLinks(data));
  setFilter($classFilterGitBtn, getItemsWithGit(data));
  setFilter($classFilterRecentBtn, getItemsSortedByRecent(data));
  renderClasses(data);
}
