function getRandomElement<T>(list: T[]): T {
  const idx = Math.floor(Math.random() * list.length);

  return list[idx];
}

const elt: string = getRandomElement<string>(["2", "5", "176"]);

console.log("elt", elt);

console.log(getRandomElement<any>(["2", 5, true]));
