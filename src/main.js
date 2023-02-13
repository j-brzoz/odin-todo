import "./style.css";

function mainBtns(){
    const mainBtnsDiv = document.createElement("div");
    mainBtnsDiv.classList.add("mainBtns")

    const sortBtn = document.createElement("button");
    const addBtn = document.createElement("button");

    sortBtn.textContent = "sort";
    addBtn.textContent = "add";

    sortBtn.classList.add("mainBtn");
    addBtn.classList.add("mainBtn");

    mainBtnsDiv.appendChild(sortBtn);
    mainBtnsDiv.appendChild(addBtn);

    return mainBtnsDiv;
}

function main(){
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("main");

    mainDiv.appendChild(mainBtns());

    return mainDiv;
}

export default main;