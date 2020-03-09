import '../styles/main.scss';
import 'bootstrap';
import eat from './components/eat';
import play from './components/play';
import sleep from './components/sleep';
import fight from './components/fight';

console.error('hi');


const init = () => {
  eat.eatQuadBuilder();
  play.playQuadBuilder();
  sleep.sleepQuadBuilder();
  fight.fightQuadBuilder();
  // eat.badFoodEvent();
};
init();
