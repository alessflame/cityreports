let levels = document.querySelectorAll("span.level");
let levelsValue = document.querySelectorAll("b.levelsValue");

for (let i = 0; i < levelsValue.length; i++) {
  if (Number(levelsValue[i].innerText) < 4) {
    levels[i].style.borderColor = "green";
  } else if (Number(levelsValue[i].innerText) > 7) {
    levels[i].style.borderColor = "orangered";
  }
}
