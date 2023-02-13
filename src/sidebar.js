import "./style.css";

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

export default sidebar;