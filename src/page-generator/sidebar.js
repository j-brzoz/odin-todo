import "../style.css";
import { projects } from "../logic/project";
import { lists } from "../logic/list"

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

function sidebarProjects(){
    const sidebarProjectsDiv = document.createElement("div");
    sidebarProjectsDiv.classList.add("sidebarBtns");

    const sidebarProjectsTitle = document.createElement("div");
    sidebarProjectsTitle.textContent = "your projects";
    sidebarProjectsTitle.classList.add("sidebarTitle")
    sidebarProjectsDiv.appendChild(sidebarProjectsTitle);
    
    for(let i = 0; i < projects.length; i+=1){
        const projectBtn = document.createElement("button");
        projectBtn.textContent = projects[i].title;
        projectBtn.classList.add("sidebarBtn");
        sidebarProjectsDiv.appendChild(projectBtn);
    }
    return sidebarProjectsDiv;
}

function sidebarLists(){
    const sidebarListsDiv = document.createElement("div");
    sidebarListsDiv.classList.add("sidebarBtns");

    const sidebarListsTitle = document.createElement("div");
    sidebarListsTitle.textContent = "your lists";
    sidebarListsTitle.classList.add("sidebarTitle")
    sidebarListsDiv.appendChild(sidebarListsTitle);
    
    for(let i = 0; i < lists.length; i+=1){
        const listBtn = document.createElement("button");
        listBtn.textContent = lists[i].title;
        listBtn.classList.add("sidebarBtn");
        sidebarListsDiv.appendChild(listBtn);
    }
    return sidebarListsDiv;
}

function sidebar(){
    const sidebarDiv = document.createElement("div");
    sidebarDiv.classList.add("sidebar");

    sidebarDiv.appendChild(sidebarBtns());
    sidebarDiv.appendChild(sidebarProjects());
    sidebarDiv.append(sidebarLists());

    return sidebarDiv;
}

export default sidebar;