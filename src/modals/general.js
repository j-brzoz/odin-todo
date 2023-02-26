// changes modal display
function modalDisplay(modalId) {
        const change = document.getElementById(modalId);
        change.style.display = change.style.display !== "block" ? "block" : "none";
};

// sets multiple attributes
function attributesSetter(element, elementAttributes){
    Object.keys(elementAttributes).forEach(attribute => {
        element.setAttribute(attribute, elementAttributes[attribute])
    })
}

export { modalDisplay, attributesSetter}