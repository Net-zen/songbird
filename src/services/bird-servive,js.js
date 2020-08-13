import birds from "./birds";

export default class BirdService {

  _getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  getRandomBird = () => {
    return birds[this._getRandomNumber(0, 5)][this._getRandomNumber(0, 5)];
  }
}
