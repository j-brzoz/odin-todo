import "../style.css";
import { projects } from "../logic/project";
import { lists } from "../logic/list";

function taskFromProject(project){
    const div = document.getElementById("taskDisplay");
    
    const projectInfo = document.createElement("div");
    const projectTitle = document.createElement("p");
    const projectDescrition = document.createElement("p");
    const projectDate = document.createElement("p");
    const projectTasks = document.createElement("div");

    projectTasks.textContent = "Tasks:";

    let tmp = 0;
    for(let i = 0; i < projects.length; i+=1){
        if(project === projects[i].title){
            tmp += 1;
            projectTitle.textContent = projects[i].title;
            projectDescrition.textContent = projects[i].description;
            projectDate.textContent = projects[i].dueDate;
            for(let j = 0; j < projects[i].tasks.length; j+=1){
                const task = document.createElement("div");
                task.classList.add("task");

                const taskTitle = document.createElement("p");
                const taskDate = document.createElement("p");
                const taskPriority = document.createElement("p");
                const taskStatus = document.createElement("p");

                taskTitle.textContent = projects[i].tasks[j].title;
                taskDate.textContent = projects[i].tasks[j].dueDate.toDateString();
                taskPriority.textContent = projects[i].tasks[j].priority;
                taskStatus.textContent = projects[i].tasks[j].status;

                const taskBtns = document.createElement("div");
                const taskInfoBtn = document.createElement("button");
                const taskEditBtn = document.createElement("button");
                const taskDeleteBtn = document.createElement("button");

                taskInfoBtn.textContent = "info";
                taskEditBtn.textContent = "edit";
                taskDeleteBtn.textContent = "delete";
            
                taskBtns.appendChild(taskInfoBtn);
                taskBtns.appendChild(taskEditBtn);
                taskBtns.appendChild(taskDeleteBtn);                

                task.appendChild(taskTitle);
                task.appendChild(taskDate);
                task.appendChild(taskPriority);
                task.appendChild(taskStatus);
                task.appendChild(taskBtns);
                projectTasks.appendChild(task);
            }
        }
    }

    projectInfo.classList.add("info");
    projectTitle.classList.add("title");
    projectDate.classList.add("date");
    projectTasks.classList.add("tasks");
    projectDescrition.classList.add("description");

    projectInfo.appendChild(projectTitle);
    projectInfo.appendChild(projectDate);
    
    div.appendChild(projectInfo);
    div.appendChild(projectDescrition);
    div.appendChild(projectTasks);

    if(tmp === 0)
        projectTasks.textContent = "";
    
    return div;
}

function taskFromList(list){
    const div = document.getElementById("taskDisplay");
    
    const listInfo = document.createElement("div");
    const listTitle = document.createElement("p");
    const listDescrition = document.createElement("p");
    const listTasks = document.createElement("div");

    listTasks.textContent = "Tasks:"

    let tmp = 0;
    for(let i = 0; i < lists.length; i+=1){
        if(list === lists[i].title){
            tmp += 1;
            listTitle.textContent = lists[i].title;
            listDescrition.textContent = lists[i].description;
            for(let j = 0; j < lists[i].tasks.length; j+=1){
                const task = document.createElement("div");
                task.classList.add("task");

                const taskTitle = document.createElement("p");
                const taskDate = document.createElement("p");
                const taskPriority = document.createElement("p");
                const taskStatus = document.createElement("p");

                taskTitle.textContent = lists[i].tasks[j].title;
                taskDate.textContent = lists[i].tasks[j].dueDate.toDateString();
                taskPriority.textContent = lists[i].tasks[j].priority;
                taskStatus.textContent = lists[i].tasks[j].status;

                const taskBtns = document.createElement("div");
                const taskInfoBtn = document.createElement("button");
                const taskEditBtn = document.createElement("button");
                const taskDeleteBtn = document.createElement("button");

                taskInfoBtn.textContent = "info";
                taskEditBtn.textContent = "edit";
                taskDeleteBtn.textContent = "delete";
            
                taskBtns.appendChild(taskInfoBtn);
                taskBtns.appendChild(taskEditBtn);
                taskBtns.appendChild(taskDeleteBtn);                

                task.appendChild(taskTitle);
                task.appendChild(taskDate);
                task.appendChild(taskPriority);
                task.appendChild(taskStatus);
                task.appendChild(taskBtns);
                listTasks.appendChild(task);
            }
        }
    }

    listInfo.classList.add("info");
    listTitle.classList.add("title");
    listTasks.classList.add("tasks");
    listDescrition.classList.add("description");

    listInfo.appendChild(listTitle);
    
    div.appendChild(listInfo);
    div.appendChild(listDescrition);
    div.appendChild(listTasks);

    if(tmp === 0)
        listTasks.textContent = "";
    
    return div;
}

export { taskFromProject, taskFromList };