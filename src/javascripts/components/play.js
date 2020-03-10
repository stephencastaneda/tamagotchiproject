import utils from '../helpers/utils';

let fun = 50;

const superFunEvent = () => {
  if (fun <= 50) {
    fun += 50;
    $('#play-bar').val(fun);
    $('#play-score').html(fun);
  }
};

const funEvent = () => {
  if (fun <= 98) {
    fun += 2;
    $('#play-bar').val(fun);
    $('#play-score').html(fun);
  }
};

const playQuadBuilder = () => {
  let domString = '';
  domString += '<h1>Play</h1>';
  domString += '<div id="p-bar">';
  domString += `<progress id="play-bar" value="${fun}" min="0" max="100" style="background-color:red"></progress>`;
  domString += `<p id="play-score">${fun}</p>`;
  domString += '</div>';
  domString += '<p>Tamagotchi</p>';
  domString += '<div id="button-container">';
  domString += '<button class= "really-fun"><i class="fas fa-snowboarding"></i></button>';
  domString += '<button class= "fun"><i class="fas fa-biking"></i></button>';
  domString += '</div>';
  utils.printToDom('play', domString);
  $('.really-fun').on('click', superFunEvent);
  $('.fun').on('click', funEvent);
};

export default { playQuadBuilder };
