const icon = document.querySelector('.nav i');

function toggleVisibility() {
    console.log("hi");
    var container = document.querySelector(".container");
    var style = window.getComputedStyle(container);
    var width = style.getPropertyValue('width');
    if (width === "0px") {
        console.log("width is 0")
      container.style.width = "20vw";
    } else {
        console.log("width is not 0")
        console.log(width)
      container.style.width = "0vw";
    }
}

icon.addEventListener('click',toggleVisibility );