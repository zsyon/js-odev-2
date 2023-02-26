let formDOM = document.getElementById("form")
formDOM.addEventListener("submit" , form)

function form() {
  event.preventDefault()
  let name = document.getElementById("task")

  if(name.value){
    addItem(name.value)
    console.log(typeof(name.value))
  }
  else if(name.value === " ") {
    alert("Listeye boş eleman ekleyemezsiniz ! ")
  }
  else {
    alert("Listeye boş eleman ekleyemezsiniz ! ")
  }


}

let ulDOM = document.getElementById("list")

let addItem = (list) => {
  let liDOM = document.getElementById("li")
  liDOM.innerHTML = `${list}`
  ulDOM.append(liDOM)
}

let deleteItem = (list) => {
  let liDOM = document.getElementById("li")
  liDOM.innerHTML = `${list}`
  ulDOM.remove()(liDOM)
}




