export default function sortHeroes(heroesArray) {
  heroesArray.sort((a, b) => (a.health > b.health ? -1 : 1));
  return heroesArray;
}
