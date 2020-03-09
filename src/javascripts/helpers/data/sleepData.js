let energy = 50;

const getEnergyScore = () => energy;

const setEnergyScore = (newEnergy) => {
  energy = newEnergy;
};

export default { getEnergyScore, setEnergyScore };
