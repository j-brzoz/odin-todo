class Project {
    constructor(title, description, dueDate){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.tasks = [];
    }
}

const projects = [];
const projectExample = new Project("side hustle", "default project", "11.03.2023");
const projectExample2 = new Project("birthday party", "default project", "11.03.2023");
const projectExample3 = new Project("car repair", "default project", "11.03.2023");
const projectExample4 = new Project("vacation plan", "default project", "11.03.2023");

function addProjectToArray(project){
    projects.push(project);
}

function editProject(project, newTitle, newDescription, newDueDate){
    for(let i = 0; i < projects.length; i+=1){
        if(project.title === projects[i].title){
            projects[i].title = newTitle;
            projects[i].description = newDescription;
            projects[i].dueDate = newDueDate;
            for(let j = 0; j < projects[i].tasks.length; j+=1){
                projects[i].tasks[j].parentName = newTitle;
            }
        }
    }
}

function deleteProject(project){
    for(let i = 0; i < projects.length; i+=1){
        if(project.title === projects[i].title){
            projects.splice(i, 1);                
        }
    }
}

export { projects, projectExample, projectExample2,projectExample3,projectExample4,addProjectToArray, editProject, deleteProject };