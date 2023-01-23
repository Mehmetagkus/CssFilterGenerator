let img = document.querySelector("#img")
let codeArea = document.querySelector("#codeArea")
function grayScale() {
    let grayScale = document.querySelector("#grayScale").value
    let grayScaleValue = document.querySelector("#grayScaleValue").innerHTML = grayScale + "%"
    img.style.filter = `grayscale(${grayScale}%)`
    codeArea.value =
        `filter: grayscale(${grayScale}%);
-webkit-filter: grayscale(${grayScale}%);
-moz-filter: grayscale(${grayScale}%);
`
}
function sepia() {
    let sepia = document.querySelector("#sepia").value
    let sepiaValue = document.querySelector("#sepiaValue").innerHTML = sepia + "%"
    img.style.filter = `sepia(${sepia}%)`
    codeArea.value =
        `filter: sepia(${sepia}%);
-webkit-filter: sepia(${sepia}%);
-moz-filter: sepia(${sepia}%);
`
}
function blurs() {
    let blur = document.querySelector("#blur").value
    let blurValue = document.querySelector("#blurValue").innerHTML = blur + "px"
    img.style.filter = `blur(${blur}px)`
    codeArea.value =
        `filter: blur(${blur}px);
-webkit-filter: blur(${blur}px);
-moz-filter: blur(${blur}px);
`
}
function brightness() {
    let brightness = document.querySelector("#brightness").value
    let brightnessValue = document.querySelector("#brightnessValue").innerHTML = brightness + "%"
    img.style.filter = `brightness(${brightness}%)`
    codeArea.value =
        `filter: brightness(${brightness}%);
-webkit-filter: brightness(${brightness}%);
-moz-filter: brightness(${brightness}%);
`
}
function hueRotate() {
    let hueRotate = document.querySelector("#hueRotate").value
    let hueRotateValue = document.querySelector("#hueRotateValue").innerHTML = hueRotate + "°"
    img.style.filter = `hue-rotate(${hueRotate}deg)`
    codeArea.value =
        `filter: hue-rotate(${hueRotate}deg);
-webkit-filter: hue-rotate(${hueRotate}deg);
-moz-filter: hue-rotate(${hueRotate}deg);
`
}
function saturate() {
    let saturate = document.querySelector("#saturate").value
    let saturateValue = document.querySelector("#saturateValue").innerHTML = saturate + "%"
    img.style.filter = `saturate(${saturate}%)`
    codeArea.value =
        `filter: saturate(${saturate}%);
-webkit-filter: saturate(${saturate}%);
-moz-filter: saturate(${saturate}%);
`
}
function opacity() {
    let opacity = document.querySelector("#opacity").value
    let opacityValue = document.querySelector("#opacityValue").innerHTML = opacity + "%"
    img.style.filter = `opacity(${opacity}%)`
    codeArea.value =
        `filter: opacity(${opacity}%);
-webkit-filter: opacity(${opacity}%);
-moz-filter: opacity(${opacity}%);
`
}
function contrast() {
    let contrast = document.querySelector("#contrast").value
    let contrastValue = document.querySelector("#contrastValue").innerHTML = contrast + "%"
    img.style.filter = `contrast(${contrast}%)`
    codeArea.value =
        `filter: contrast(${contrast}%);
-webkit-filter: contrast(${contrast}%);
-moz-filter: contrast(${contrast}%);
`
}
function invert() {
    let invert = document.querySelector("#invert").value
    let invertValue = document.querySelector("#invertValue").innerHTML = invert + "%"
    img.style.filter = `invert(${invert}%)`
    codeArea.value =
        `filter: invert(${invert}%);
-webkit-filter: invert(${invert}%);
-moz-filter: invert(${invert}%);
`
}
let copy = document.querySelector("#copy")
copy.addEventListener("click", () => {
    codeArea.select()
    document.execCommand("copy")
})
