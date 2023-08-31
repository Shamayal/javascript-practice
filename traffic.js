// // let pedestrians = 20;
// // if (stoplight === 'green' && pedestrians <= 0) {

// let stoplight = 'green';
// let pedestrians = true;

// if (stoplight === 'green' && !pedestrians) {
//   // if stoplight is green and there are NO pedestrians
//   console.log('Go!');
// } else {
//   console.log('Stop!');
// }

let stoplight = 'blue';
let pedestrians = true;

if (stoplight === 'green' && !pedestrians) {
  console.log('Go!');
} else if (stoplight === 'green' && pedestrians) {
  console.log('Be careful!')
} else if (stoplight === 'yellow') {
  console.log('Slow down!');
} else {
  console.log('Unclear signal, proceed with caution!')
}
