import "./style.css";
import { modal, modalDisplay } from "./addModal";

function mainBtns(){
    const mainBtnsDiv = document.createElement("div");
    mainBtnsDiv.classList.add("mainBtns")

    const sortBtn = document.createElement("button");
    const addBtn = document.createElement("button");

    sortBtn.textContent = "sort";
    addBtn.textContent = "add";

    sortBtn.classList.add("mainBtn");
    addBtn.classList.add("mainBtn");

    addBtn.addEventListener("click", () => modalDisplay());

    mainBtnsDiv.appendChild(sortBtn);
    mainBtnsDiv.appendChild(addBtn);

    return mainBtnsDiv;
}

function mainContent(){
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("main");

    mainDiv.appendChild(mainBtns());
    mainDiv.appendChild(modal());

    return mainDiv;
}

export default mainContent;