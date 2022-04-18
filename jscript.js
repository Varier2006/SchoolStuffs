function hideTopDiv(){
    let container = document.querySelector(".container")
    container.style.display="none"
    let button = document.querySelector("#buttonShowTopDiv")
    button.style.display="block"
}
function executeButtonReadJson() {
    let button = document.getElementById("buttonReadJson")
    button.addEventListener("click", readJson)
}
function executeButtonShowTopDiv() {
    let button = document.getElementById("buttonShowTopDiv")
    button.addEventListener("click", showTopDiv)
}
function executeButtonThemeToggle(){
    let button = document.getElementById("buttonThemeToggle")
    button.addEventListener("click", themeSwitch)
}
function divDragging() {
    let div = document.getElementById("topDiv")
    div.addEventListener("drag", hideTopDiv)
}
function showTopDiv(){
    let container = document.querySelector(".container")
    container.style.display="block"
    let button = document.querySelector("#buttonShowTopDiv")
    button.style.display="none"
}
function themeSwitch(){
    // Obtains an array of all <link>
    // elements.
    // Select your element using indexing.
    let theme = document.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') === 'light.css') {
        theme.setAttribute('href', 'dark.css');
    }
    else {
        theme.setAttribute('href', 'light.css');
    }
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
executeButtonReadJson()
divDragging()
executeButtonShowTopDiv()
executeButtonThemeToggle()