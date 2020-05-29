// import gifData from '../helpers/data/gifData';
import utils from '../helpers/utils';

const gifBuilder = () => {
  // const monster = gifData.getGif();
  let domString = '';
  domString += '<div>';
  domString += '<img src="https://i.giphy.com/media/13b7V0neZLlq80/source.gif"></img>';
  domString += '</div>';
  utils.printToDom('monster-gif', domString);
};

export default { gifBuilder };
