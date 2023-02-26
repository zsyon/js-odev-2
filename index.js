let formDOM = document.getElementById("form")
formDOM.addEventListener("submit" , form)

function form() {
  event.preventDefault()
  let name = document.getElementById("task")
  addItem(name.value)
}

let ulDOM = document.getElementById("list")

let addItem = (list) => {
  let liDOM = document.getElementById("li")
  liDOM.innerHTML = `${list}`
  ulDOM.append(liDOM)
}


