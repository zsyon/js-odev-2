let formDOM = document.getElementById("form")
formDOM.addEventListener("click" , form)

function form() {
  let name = document.getElementById("task")
  addItem(name.value)
}

let ulDOM = document.getElementById("list")

const addItem = (list) => {
  let liDOM = document.getElementById("li")
  liDOM.innerHTML = `${list}`
  ulDOM.append(liDOM)
}


