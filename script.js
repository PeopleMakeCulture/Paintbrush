const table = document.getElementsByTagName("table")[0];
const select = document.getElementsByTagName("select")[0];
const button = document.getElementById("add-row");

let chosenColor = "red";

button.addEventListener("click", makeRow);
table.addEventListener("click", colorize);
table.addEventListener("auxclick", addMouseOver);
table.addEventListener("dblclick", removeMouseOver);
select.addEventListener("change", pickColor);

function makeRow() {
  const row = document.createElement("tr");
  for (let i = 0; i < 20; i++) {
    const td = document.createElement("td");
    row.appendChild(td);
  }
  table.appendChild(row);
}

function colorize(event) {
  const target = event.target;
  if (target.tagName !== "TD") {
    return;
  }
  if (target.className === chosenColor) {
    target.className = "";
  } else {
    target.className = chosenColor;
  }
}

function pickColor(event) {
  chosenColor = event.target.value;
}

function addMouseOver() {
  console.log("addMouseOver invoked");
  table.addEventListener("mouseover", colorize);
}

function removeMouseOver() {
  console.log("removeMouseOver invoked");
  table.removeEventListener("mouseover", colorize);
}
