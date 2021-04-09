let tot = document.getElementById("tot");
let qtd = document.getElementById("qtd");
let num = document.getElementById("num");
let btn = document.getElementById("btn");

function sorteio() {
  let total = tot.value;
  let max = qtd.value;
  let arr = [];

  for (let i = 0; i < max; i++) {
    let temp = Math.floor(Math.random() * total + 1);
    if (arr.indexOf(temp) === -1) {
      arr.push(temp);
    } else {
      i--;
    }
  }
  arr.sort((a, b) => a - b);
  return (num.textContent = arr);
}

btn.addEventListener("click", sorteio, false);
