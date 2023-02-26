let formDOM = document.getElementById("form")
formDOM.addEventListener("click" , form)

function form() {
  let name = document.getElementById("task")
  addItem(name.value)
}

let ulDOM = document.getElementById("ul")

const addItem = (username , not) => {
  let liDOM = document.getElementById("li")
  liDOM.innerHTML = `${username} , ${not}`
  ulDOM.append(liDOM)
}





let notDOM = document.getElementById("not")

