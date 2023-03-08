import { isThisWeek, isThisMonth } from "date-fns";
import "../style.css";
import { projects } from "../logic/project";
import { lists } from "../logic/list";

function taskFromToday(){
    const div = document.getElementById("taskDisplay");

    const tasks = document.createElement("div");
    tasks.textContent = "Tasks:";

    let tmp = 0;
    const today = new Date().toDateString();

    // from projects
    for(let i = 0; i < projects.length; i+=1){
        for(let j = 0; j < projects[i].tasks.length; j+=1){
            if(projects[i].tasks[j].dueDate.toDateString() === today){
                tmp += 1;
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
                tasks.appendChild(task);
            }
        }
    }

    // from lists
    for(let i = 0; i < lists.length; i+=1){
        for(let j = 0; j < lists[i].tasks.length; j+=1){
            if(lists[i].tasks[j].dueDate.toDateString() === today){
                tmp += 1;
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
                tasks.appendChild(task);
            }
        }
    }

    if(tmp === 0)
        tasks.textContent = "zero tasks for today!";

    div.appendChild(tasks);
    return div;
}

function taskFromWeek(){
    const div = document.getElementById("taskDisplay");

    const tasks = document.createElement("div");
    tasks.textContent = "Tasks:";

    let tmp = 0;

    // from projects
    for(let i = 0; i < projects.length; i+=1){
        for(let j = 0; j < projects[i].tasks.length; j+=1){
            if(isThisWeek(projects[i].tasks[j].dueDate)){
                tmp += 1;
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
                tasks.appendChild(task);
            }
        }
    }

    // from lists
    for(let i = 0; i < lists.length; i+=1){
        for(let j = 0; j < lists[i].tasks.length; j+=1){
            if(isThisWeek(lists[i].tasks[j].dueDate)){
                tmp += 1;
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
                tasks.appendChild(task);
            }
        }
    }

    if(tmp === 0)
        tasks.textContent = "zero tasks for this week!";

    div.appendChild(tasks);
    return div;
}

function taskFromMonth(){
    const div = document.getElementById("taskDisplay");

    const tasks = document.createElement("div");
    tasks.textContent = "Tasks:";

    let tmp = 0;

    // from projects
    for(let i = 0; i < projects.length; i+=1){
        for(let j = 0; j < projects[i].tasks.length; j+=1){
            if(isThisMonth(projects[i].tasks[j].dueDate)){
                tmp += 1;
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
                tasks.appendChild(task);
            }
        }
    }

    // from lists
    for(let i = 0; i < lists.length; i+=1){
        for(let j = 0; j < lists[i].tasks.length; j+=1){
            if(isThisMonth(lists[i].tasks[j].dueDate)){
                tmp += 1;
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
                tasks.appendChild(task);
            }
        }
    }

    if(tmp === 0)
        tasks.textContent = "zero tasks for this month!";

    div.appendChild(tasks);
    return div;
}

function taskAll(){
    const div = document.getElementById("taskDisplay");

    const tasks = document.createElement("div");
    tasks.textContent = "Tasks:";

    let tmp = 0;

    // from projects
    for(let i = 0; i < projects.length; i+=1){
        for(let j = 0; j < projects[i].tasks.length; j+=1){
            tmp += 1;
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
            tasks.appendChild(task);
        }
    }

    // from lists
    for(let i = 0; i < lists.length; i+=1){
        for(let j = 0; j < lists[i].tasks.length; j+=1){
            tmp += 1;
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
            tasks.appendChild(task);
        }
    }

    if(tmp === 0)
        tasks.textContent = "zero tasks!";

    div.appendChild(tasks);
    return div;
}
export { taskFromToday, taskFromWeek, taskFromMonth, taskAll}