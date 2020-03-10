import utils from '../helpers/utils';

let strength = 100;

const runAwayEvent = () => {
  if (strength <= 100) {
    strength += 1;
    $('#fight-bar').val(strength);
    $('#fight-score').html(strength);
  }
};

const violentEvent = () => {
  if (strength >= 10) {
    strength = 10;
    document.getElementById('fight-bar').value = strength;
    $('#fight-bar').val(strength);
    $('#fight-score').html(strength);
  }
};

const fightQuadBuilder = () => {
  let domString = '';
  domString += '<h1>Fight</h1>';
  domString += '<div id="p-bar">';
  domString += `<progress id="fight-bar" value="${strength}" min="0" max="100" style="background-color:red"></progress>`;
  domString += `<p id="fight-score">${strength}</p>`;
  domString += '</div>';
  domString += '<p>Tamagotchi</p>';
  domString += '<div id="button-container">';
  domString += '<button class= "run-away"><i class="fas fa-running"></i></button>';
  domString += '<button class= "fight"><i class="fas fa-hand-rock"></i></button>';
  domString += '</div>';
  utils.printToDom('fight', domString);
  $('.run-away').on('click', runAwayEvent);
  $('.fight').on('click', violentEvent);
};

export default { fightQuadBuilder };
