import { lists } from "./list";
import { projects } from "./project";

class Task {
    constructor(title, description, dueDate, priority, parentType, parentName){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.parentType = parentType;
        this.parentName = parentName;
        this.status = "Not done";
        this.id = Task.incrementId();
    }

    static incrementId() {
        if(!this.latestId)
            this.latestId = 1;
        else
            this.latestId += 1;
        return this.latestId;
    }

    addTaskToParent = function addT() {
        let check = 0;
        if(this.parentType === "list"){
            for(let i =0; i < lists.length; i+=1){
                if(this.parentName === lists[i].title){
                    lists[i].tasks.push(this);
                    check += 1;
                    break;
                }
            }
        }
        else if(this.parentType === "project"){
            for(let i =0; i < projects.length; i+=1){
                if(this.parentName === projects[i].title){
                    projects[i].tasks.push(this);
                    check += 1;
                    break;
                }
            }
        }
        if (check === 0){
            alert("Could not add task! Parent not found!")
        }
        else{
            alert("Task added")
        }
    }

    deleteTask = function deleteT() {
        let check = 0;
        for(let i = 0; i < lists.length; i+=1){
            for(let j = 0; j < lists[i].tasks.length; j+=1){
                if(this.id === lists[i].tasks[j].id){
                    lists[i].tasks.splice(j, 1);
                    check += 1;
                    break;               
                }
            }
        }
        for(let i = 0; i < projects.length; i+=1){
            for(let j = 0; j < projects[i].tasks.length; j+=1){
                if(this.id === projects[i].tasks[j].id){
                    projects[i].tasks.splice(j, 1);
                    check += 1;
                    break;
                }
            }
        }
        if (check === 0){
            alert("Could not delete task!")
        }
        else{
            alert("Task deleted")
        }
    }
}

const task1 = new Task ("shopping", "eggs, cheese, tomatoes", "03.03.2023", 3, "list", "life", "notDone");
const task2 = new Task ("shopping", "eggs, cheese, tomatoes", "03.03.2023", 3, "list", "life", "notDone");
const task3 = new Task ("ad campaign", "facebook ads", "08.03,2023", 5, "project", "side hustle", "inProgress");

function editTask(task, newTitle, newDescription, newDueDate, newPriority, newStatus){
    let check = 0;
    for(let i = 0; i < lists.length; i+=1){
        for(let j = 0; j < lists[i].tasks.length; j+=1){
            if(task.id === lists[i].tasks[j].id){
                lists[i].tasks[j].title = newTitle;
                lists[i].tasks[j].description = newDescription;
                lists[i].tasks[j].dueDate = newDueDate;
                lists[i].tasks[j].priority = newPriority;
                lists[i].tasks[j].status = newStatus;
                check += 1;
                break;
            }
        }
    }
    for(let i = 0; i < projects.length; i+=1){
        for(let j = 0; j < projects[i].tasks.length; j+=1){
            if(task.id === projects[i].tasks[j].id){
                projects[i].tasks[j].title = newTitle;
                projects[i].tasks[j].description = newDescription;
                projects[i].tasks[j].dueDate = newDueDate;
                projects[i].tasks[j].priority = newPriority;
                projects[i].tasks[j].status = newStatus;
                check += 1;
                break;
            }
        }
    }
    if (check === 0){
        alert("Could not edit task!")
    }
    else{
        alert("Task updated")
    }
}

export { Task, task1, task2, task3, editTask };