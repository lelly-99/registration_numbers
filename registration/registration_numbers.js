//references
const addButton = document.querySelector(".addButton")
const registationPlates = document.querySelector(".registationPlates")


addButton.addEventListener('click', function () {
    const newDiv = document.createElement("div")
    newDiv.classList.add("plate")
    registationPlates.appendChild(newDiv)
  });