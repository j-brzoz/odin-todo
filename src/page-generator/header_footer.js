import "../style.css";

function header(){
    const headerDiv = document.createElement("div");
    headerDiv.textContent = "your todo";
    headerDiv.classList.add("header");

    return headerDiv;
}

function footer(){
    const footerDiv = document.createElement("div");
    footerDiv.textContent = "Project from The Odin Project course by Jan Brzozowski";
    footerDiv.classList.add("footer");

    return footerDiv;
}

export {header, footer}