import { lists } from "./list";
import { projects } from "./project";

class Task {
    constructor(title, description, dueDate, priority, parentType, parentName, status){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.parentType = parentType;
        this.parentName = parentName;
        this.status = status;
        this.id = Task.incrementId();
    }

    static incrementId() {
        if(!this.latestId)
            this.latestId = 1;
        else
            this.latestId += 1;
        return this.latestId;
    } 
}

const task1 = new Task ("shopping", "eggs, cheese, tomatoes", "03.03.2023", 3, "list", "life", "notDone");
const task2 = new Task ("shopping", "eggs, cheese, tomatoes", "03.03.2023", 3, "list", "life", "notDone");
const task3 = new Task ("ad campaign", "facebook ads", "08.03,2023", 5, "project", "side hustle", "inProgress");

function addTaskToParent(task) {
	if(task.parentType === "list"){
		for(let i =0; i < lists.length; i+=1){
			if(task.parentName === lists[i].title){
				lists[i].tasks.push(task);
			}
		}
	}
    else if(task.parentType === "project"){
		for(let i =0; i < projects.length; i+=1){
			if(task.parentName === projects[i].title){
				projects[i].tasks.push(task);
			}
		}
	}
}

function editTask(task, newTitle, newDescription, newDueDate, priority){
    for(let i = 0; i < lists.length; i+=1){
        for(let j = 0; j < lists[i].tasks.length; j+=1){
            if(task.id === lists[i].tasks[j].id){
                lists[i].tasks[j].title = newTitle;
                lists[i].tasks[j].description = newDescription;
                lists[i].tasks[j].dueDate = newDueDate;
                lists[i].tasks[j].priority = priority;
            }
        }
    }
    for(let i = 0; i < projects.length; i+=1){
        for(let j = 0; j < projects[i].tasks.length; j+=1){
            if(task.id === projects[i].tasks[j].id){
                projects[i].tasks[j].title = newTitle;
                projects[i].tasks[j].description = newDescription;
                projects[i].tasks[j].dueDate = newDueDate;
                projects[i].tasks[j].priority = priority;
            }
        }
    }
}

function deleteTask(task){
    for(let i = 0; i < lists.length; i+=1){
        for(let j = 0; j < lists[i].tasks.length; j+=1){
            if(task.id === lists[i].tasks[j].id){
                lists[i].tasks.splice(j, 1);                
            }
        }
    }
    for(let i = 0; i < projects.length; i+=1){
        for(let j = 0; j < projects[i].tasks.length; j+=1){
            if(task.id === projects[i].tasks[j].id){
                projects[i].tasks.splice(j, 1);
            }
        }
    }
}

export { task1, task2, task3, addTaskToParent, editTask, deleteTask};