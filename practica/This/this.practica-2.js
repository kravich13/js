let div = document.createElement("div")
let p = document.createElement("p")
p.textContent = "tutdsadsajdasjdhasdjas"
div.append(p)
document.body.prepend(div)


// div.addEventListener("click", function(event) {
//     console.log(this) // вывыедет div
//     this.innerHTML = "<p>text</p>" // изменит содержимое div на "text", т.е. this будет div
//     this.style.backgroundColor = "red"    
// })


let rED = () => console.log(this)
div.addEventListener("click", rED)