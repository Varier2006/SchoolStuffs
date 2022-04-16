function hideDiv(){
    let container = document.querySelector(".container")
    container.style.display="none"
    let button = document.querySelector("#show")
    button.style.display="block"
}
function executeByButton() {
    let button = document.getElementById("hide")
    button.addEventListener("click", readJson)
}
executeByButton()

function executeByButton1() {
    let button = document.getElementById("show")
    button.addEventListener("click", showDiv)
}
executeByButton1()

function divDragging() {
    let nieco = document.getElementById("niecoa")
    nieco.addEventListener("drag", hideDiv)
}
divDragging()

function showDiv(){
    let container = document.querySelector(".container")
    container.style.display="block"
    let button = document.querySelector("#show")
    button.style.display="none"
}

const fetchJson = async ()=>{
    let name = "names.json"
    const response = await fetch(name)
    return await response.json()
}

function readJson(){
    let container = document.querySelector(".container")
    let json = fetchJson()
    json.then(response =>{
        response.members.forEach((item=>{
            if(item.powers.length===2) {
                let paragraph = document.createElement("p")
                paragraph.innerText = JSON.stringify(item.name)
                container.append(paragraph)
                console.log(container)
                console.log(paragraph)
            }
        }))
    })
}