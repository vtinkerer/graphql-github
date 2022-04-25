export abstract class SmileyUtils {
  private static readonly smileys = [
    '^_^',
    ':D',
    'xD',
    ':3',
    ':)',
    'ʕ•ᴥ•ʔ',
    'ƪ(ړײ)ƪ​​',
  ];

  static getRandomSmiley() {
    return this.smileys[Math.floor(Math.random() * this.smileys.length)];
  }
}
