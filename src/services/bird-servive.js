import birds from "./birds";

export default class BirdService {

  getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  getRandomBird = () => birds[this.getRandomNumber(0, 5)][this.getRandomNumber(0, 5)];

  getBirdForRound = (round) => birds[round][this.getRandomNumber(0, 5)];

  getAnswersForRound = (round) => birds[round];
}
