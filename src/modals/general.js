// changes modal display
function modalDisplay() {
    const change = document.querySelector(".modal");
    change.style.display = change.style.display !== "block" ? "block" : "none";
};

// sets multiple attributes
function attributesSetter(element, elementAttributes){
    Object.keys(elementAttributes).forEach(attribute => {
        element.setAttribute(attribute, elementAttributes[attribute])
    })
}

function modalGenerator(){
    const modalDiv = document.createElement("div");
    modalDiv.classList.add("modal");
    
    // lets you to exit modal by clicking outside the modal
    window.onclick = function modalToNone(event) {
        if (event.target === modalDiv) {
          modalDiv.style.display = "none";
        }
    };

    return modalDiv
}

export { modalDisplay, attributesSetter, modalGenerator}