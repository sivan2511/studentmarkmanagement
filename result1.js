const resultForm = document.getElementById("resultForm");
const resultTable = document.getElementById("resultTable");
const tbody = resultTable.querySelector("tbody");

resultForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const rollInput = document.getElementById("roll");
  const HTMLInput = document.getElementById("HTML");
  const CSSInput = document.getElementById("CSS");
  const JavaScriptInput = document.getElementById("JavaScript");

  const name = nameInput.value;
  const roll = rollInput.value;
  const HTML = HTMLInput.value;
  const CSS = CSSInput.value;
  const JavaScript = JavaScriptInput.value;

  const total =
    parseInt(HTML) + parseInt(CSS) + parseInt(JavaScript);
  const percentage = ((total / 300) * 100).toFixed(2);

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${roll}</td>
    <td>${HTML}</td>
    <td>${CSS}</td>
    <td>${JavaScript}</td>
    <td>${total}</td>
    <td>${percentage}%</td>
    <td>
      <button class="edit-button" onclick="editResult(this)">Edit</button>
    </td>
  `;

  tbody.appendChild(newRow);

  nameInput.value = "";
  rollInput.value = "";
  HTMLInput.value = "";
  CSSInput.value = "";
  JavaScriptInput.value = "";
});

function editResult(button) {
  const row = button.parentNode.parentNode;
  const cells = row.querySelectorAll("td");

  const name = cells[0].textContent;
  const roll = cells[1].textContent;
  const HTML = cells[2].textContent;
  const CSS = cells[3].textContent;
  const JavaScript = cells[4].textContent;

  const nameInput = document.getElementById("name");
  const rollInput = document.getElementById("roll");
  const HTMLInput = document.getElementById("HTML");
  const CSSInput = document.getElementById("CSS");
  const JavaScriptInput = document.getElementById("JavaScript");

  nameInput.value = name;
  rollInput.value = roll;
  HTMLInput.value = HTML;
  CSSInput.value = CSS;
  JavaScriptInput.value = JavaScript;

  row.remove();
}
