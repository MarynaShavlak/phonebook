import randomColor from 'randomcolor';

export function getRandomColors() {
  const colors = randomColor({ hue: 'pink', count: 10 });
  console.log('colors: ', colors);
  return colors;
}
