import utils from '../helpers/utils';

let fun = 50;

const superFunEvent = () => {
  if (fun <= 50) {
    fun += 50;
    document.getElementById('play-bar').value = fun;
  }
};

const funEvent = () => {
  if (fun <= 98) {
    fun += 2;
    document.getElementById('play-bar').value = fun;
  }
};

const playQuadBuilder = () => {
  let domString = '';
  domString += '<h1>Play</h1>';
  domString += '<div id="p-bar">';
  domString += `<progress id="play-bar" value="${fun}" min="0" max="100" style="background-color:red"></progress>`;
  domString += '</div>';
  domString += '<p>Tamagotchi</p>';
  domString += '<div id="button-container">';
  domString += '<button class= "really-fun">Surfboarding</button>';
  domString += '<button class= "fun">Rollerblading</button>';
  domString += '</div>';
  utils.printToDom('play', domString);
  $('.really-fun').on('click', superFunEvent);
  $('.fun').on('click', funEvent);
};

export default { playQuadBuilder };
