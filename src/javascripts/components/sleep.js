import utils from '../helpers/utils';

let energy = 50;

const napEvent = () => {
  if (energy <= 50) {
    energy += 50;
    $('#sleep-bar').val(energy);
    $('#sleep-score').html(energy);
  }
};

const slumberEvent = () => {
  if (energy <= 40) {
    energy += 60;
    $('#sleep-bar').val(energy);
    $('#sleep-score').html(energy);
  }
};

const sleepQuadBuilder = () => {
  let domString = '';
  domString += '<h1>Sleep</h1>';
  domString += '<div id="p-bar">';
  domString += `<progress id="sleep-bar" value="${energy}" min="0" max="100" style="background-color:red"></progress>`;
  domString += `<p id="sleep-score">${energy}</p>`;
  domString += '</div>';
  domString += '<p>Tamagotchi</p>';
  domString += '<div id="button-container">';
  domString += '<button class= "nap"><i class="fas fa-clock"></i></button>';
  domString += '<button class= "slumber"><i class="fas fa-bed"></i></button>';
  domString += '</div>';
  utils.printToDom('sleep', domString);
  $('.nap').on('click', napEvent);
  $('.slumber').on('click', slumberEvent);
};

export default { sleepQuadBuilder };
