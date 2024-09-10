import chalk from 'chalk';
import chroma from 'chroma-js';
import randomHex from 'random-hex';

let hexValue;
// Check if hue or hue and luminocity is entered
if (process.argv.length > 2) {
  const colorName = process.argv[2];
  let color = chroma(colorName);

  const luminosity = process.argv[3];

  if (luminosity === 'light') {
    color = color.brighten();
  } else if (luminosity === 'dark') {
    color = color.darken();
  }
  // Transform the color user typed into a hex value
  hexValue = color.hex();
} else {
  // If hue or hue and luminocity are not entered, generate random hex value
  hexValue = randomHex.generate();
}
// Display the hex value in the terminal
console.log(
  chalk.hex(hexValue)(
    `###############################
###############################
###############################
#####                     #####
#####      ${hexValue}        #####
#####                     #####
###############################
###############################
###############################`,
  ),
);
