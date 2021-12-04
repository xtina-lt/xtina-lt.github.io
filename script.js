/*const words = new URLSearchParams(window.location.search)
let search = words.get('a')
console.log(search)*/

//document.getElementsByTagName("H1")[0].setAttribute("class", "democlass");

let link = document.getElementsByTagName("a")
for (let i=0; i<link.length; i++){
    link[i].setAttribute("target", '_blank')
}

