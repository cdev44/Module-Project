var output = document.getElementById("output");
var value1 = Number(document.getElementById("input1"));
var value2 = Number(document.getElementById("input2"));
var value3 = Number(document.getElementById("input3"));
var pi = 3.14;

document.getElementById("calculate").addEventListener("click", calculate);

// Calculate the surface area
function calculate() {
  document.getElementById("input1");
  let surfaceArea = pi * value1 ** 2 * value2;
  console.log(surfaceArea);
}
document.getElementById("light-mode").addEventListener("click", brighten);
function brighten() {}
