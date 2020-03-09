import utils from '../helpers/utils';

let full = 100;

const badFoodEvent = () => {
  if (full >= 3) {
    full -= 3;
    document.getElementById('bar').value = full;
  }
};

const goodFoodEvent = () => {
  if (full <= 90) {
    full += 10;
    document.getElementById('bar').value = full;
  }
};

const eatQuadBuilder = () => {
  let domString = '';
  domString += '<h1>Eat</h1>';
  domString += '<div id="p-bar">';
  domString += `<progress id="bar" value="${full}" min="0" max="100" style="background-color:red"></progress>`;
  domString += '</div>';
  domString += '<p>Tamagotchi</p>';
  domString += '<div id="button-container">';
  domString += '<button class= "good-food">Broccoli</button>';
  domString += '<button class= "bad-food">Pizza</button>';
  domString += '</div>';
  utils.printToDom('eat', domString);
  $('.bad-food').on('click', badFoodEvent);
  $('.good-food').on('click', goodFoodEvent);
};

export default { eatQuadBuilder, badFoodEvent, goodFoodEvent };
