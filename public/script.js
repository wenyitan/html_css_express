
const coloredDiv = document.querySelector(".color-box")

const cloakParagraph = () => {
    let button = document.getElementById("invisibility cloak")
    let paragaph = document.getElementById("Harry Potter")
    paragaph.classList.toggle("cloaked")
    button.textContent = button.textContent === "Uncloak" ? "Cloak" : "Uncloak"
}

const changeColor = () => {
    let colourInput = document.getElementById("color-input")
    coloredDiv.style.backgroundColor = colourInput.value
}

const changePadding = () => {
    let paddingSlider = document.getElementById("padding-slider")
    coloredDiv.style.padding = paddingSlider.value + "px"
}
