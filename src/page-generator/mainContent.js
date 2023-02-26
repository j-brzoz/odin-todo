import "../style.css";
import { taskModal } from "../modals/taskModal";
import { modalDisplay } from "../modals/general";
import { listModal } from "../modals/listModal";

function mainBtns(){
    const mainBtnsDiv = document.createElement("div");
    mainBtnsDiv.classList.add("mainBtns")

    const sortBtn = document.createElement("button");
    const addTaskBtn = document.createElement("button");
    const addListBtn = document.createElement("button");
    const addProjectBtn = document.createElement("button");

    sortBtn.textContent = "sort";
    addTaskBtn.textContent = "add new task";
    addListBtn.textContent = "add new list";
    addProjectBtn.textContent = "add new project";

    sortBtn.classList.add("mainBtn");
    addTaskBtn.classList.add("mainBtn");
    addListBtn.classList.add("mainBtn");
    addProjectBtn.classList.add("mainBtn");

    addTaskBtn.addEventListener("click", () => modalDisplay("taskModal"));
    addListBtn.addEventListener("click", () => modalDisplay("listModal"));

    mainBtnsDiv.appendChild(sortBtn);
    mainBtnsDiv.appendChild(addTaskBtn);
    mainBtnsDiv.appendChild(addListBtn);
    mainBtnsDiv.appendChild(addProjectBtn);

    return mainBtnsDiv;
}

function mainContent(){
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("main");

    mainDiv.appendChild(mainBtns());
    mainDiv.appendChild(taskModal());
    mainDiv.appendChild(listModal());

    return mainDiv;
}

export default mainContent;