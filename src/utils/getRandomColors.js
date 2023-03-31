import randomColor from 'randomcolor';

export function getRandomColors() {
  const colors = randomColor({ hue: 'pink', count: 10 });
  return colors;
  // const colors = ['#ef4287', '#f2c94c', '#bb6bd9', '#9b51e0', '#f787b4'];
  // const randomIndex = Math.floor(Math.random() * colors.length);
  // return colors[randomIndex];
}
