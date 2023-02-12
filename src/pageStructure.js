import "./style.css";

function header(){
    const headerDiv = document.createElement("div");
    headerDiv.textContent = "your todo";
    headerDiv.classList.add("header");

    return headerDiv;
}

function sidebarBtns(){
    const sidebarBtnsDiv = document.createElement("div")
    sidebarBtnsDiv.classList.add("sidebarBtns")

    const todayBtn = document.createElement("button");
    const weekBtn = document.createElement("button");
    const monthBtn = document.createElement("button");
    const allBtn = document.createElement("button");

    todayBtn.textContent = "today";
    weekBtn.textContent = "this week";
    monthBtn.textContent = "this month";
    allBtn.textContent = "all";

    todayBtn.classList.add("sidebarBtn");
    weekBtn.classList.add("sidebarBtn");
    monthBtn.classList.add("sidebarBtn");
    allBtn.classList.add("sidebarBtn");

    sidebarBtnsDiv.appendChild(todayBtn);
    sidebarBtnsDiv.appendChild(weekBtn);
    sidebarBtnsDiv.appendChild(monthBtn);
    sidebarBtnsDiv.appendChild(allBtn);

    return sidebarBtnsDiv;
} 

function sidebar(){
    const sidebarDiv = document.createElement("div");
    sidebarDiv.classList.add("sidebar");

    sidebarDiv.appendChild(sidebarBtns());
    
    return sidebarDiv;
}

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

function footer(){
    const footerDiv = document.createElement("div");
    footerDiv.textContent = "Project from The Odin Project course by Jan Brzozowski";
    footerDiv.classList.add("footer");

    return footerDiv;
}

function pageStucture(){
    document.body.appendChild(header());
    document.body.appendChild(sidebar());
    document.body.appendChild(main());
    document.body.appendChild(footer());
}

export default pageStucture;