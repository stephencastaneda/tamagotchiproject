import utils from '../helpers/utils';

let full = 100;

const badFoodEvent = () => {
  if (full >= 3) {
    full -= 3;
    $('#bar').val(full);
    $('#eat-score').html(full);
  }
};

const goodFoodEvent = () => {
  if (full <= 90) {
    full += 10;
    $('#bar').val(full);
    $('#eat-score').html(full);
  }
};

const eatQuadBuilder = () => {
  let domString = '';
  domString += '<h1>Eat</h1>';
  domString += '<div id="p-bar">';
  domString += `<progress id="bar" value="${full}" min="0" max="100" style="background-color:red"></progress>`;
  domString += `<p id="eat-score">${full}</p>`;
  domString += '</div>';
  domString += '<p>Tamagotchi</p>';
  domString += '<div id="button-container">';
  domString += '<button class= "good-food"><i class="fas fa-carrot"></i></button>';
  domString += '<button class= "bad-food"><i class="fas fa-pizza-slice"></i></button>';
  domString += '</div>';
  utils.printToDom('eat', domString);
  $('.bad-food').on('click', badFoodEvent);
  $('.good-food').on('click', goodFoodEvent);
};

export default { eatQuadBuilder, badFoodEvent, goodFoodEvent };
