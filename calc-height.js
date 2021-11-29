const input = process.argv.slice(2);
function calcHeight(sides) {
  let side1 = parseFloat(sides[0]);
  let side2 = parseFloat(sides[1]);
  let side3 = parseFloat(sides[2]);
  if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
    console.log("It is not a isosceles triangle");
    return;
  }
  console.log(Math.sqrt(side1 ** 2 - (side3 / 2) ** 2));
}
calcHeight(input);
