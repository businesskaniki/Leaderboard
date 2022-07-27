import './style.css';
import newgame from './newgame.js';
import saveuserAndScores from './save.js';
import getdata from './getdata.js';
const submit = document.getElementById('submit');
const name = document.getElementById('name');
const score = document.getElementById('score');

document.addEventListener('DOMContentLoaded',  () => {
  getdata();
});

submit.addEventListener('click', (event) => {
  event.preventDefault();
  saveuserAndScores();
  if ((name.value == '') | (score.value == '')) {
    alert('please use letters for name');
  } else {
    name.value = '';
    score.value = '';
  }
});

newgame();
