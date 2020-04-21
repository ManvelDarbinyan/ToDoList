const itemInput = document.querySelector("#itemInput");
const btn = document.querySelector(".btnAddItem");
const warning = document.querySelector(".warning");
const listItem = document.querySelector(".itemList");
const clearButton = document.querySelector(".clearList");

function addItemElement(text) {
  let addItem = document.createElement("div");
  addItem.classList = "addItem";
  listItem.appendChild(addItem);
  addItem.textContent = text;

  deleteItemElement(addItem);
  changeItemElement(addItem, text);

  itemInput.value = "";
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (itemInput.value === "") {
    warning.classList.add("active");
    setTimeout(() => {
      warning.classList.remove("active");
    }, 2000);
  } else {
    addItemElement(itemInput.value);
  }
});

function deleteItemElement(addItem) {
  let deleteItem = document.createElement("div");
  deleteItem.classList = "deleteItem";
  addItem.appendChild(deleteItem);
  deleteItem.innerHTML = `<i class="fa fa-times-circle-o" aria-hidden="true"></i>`;

  deleteItem.addEventListener("click", () => {
    listItem.removeChild(addItem);
  });
}

function changeItemElement(addItem, text) {
  let changeItem = document.createElement("div");
  changeItem.classList = "changeItem";
  addItem.appendChild(changeItem);
  changeItem.innerHTML = `<i class="fa fa-pencil-square-o" aria-hidden="true"></i>`;

  changeItem.addEventListener("click", () => {
    listItem.removeChild(addItem);
    itemInput.value = text;
  });
}
