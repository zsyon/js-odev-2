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
  let liDOM = document.createElement("li")
  liDOM.innerHTML = `${list}`
  ulDOM.append(liDOM)
}


//Silme işleminin eklenmesi
let pageDOM = document.getElementById("list")
pageDOM.addEventListener("click" , fonks)

let uldOM = document.getElementById("list")

function fonks(){
  let lidOM = document.getElementById("li1")
  uldOM.remove(lidOM)
}





