const projects = [];

class Project {
    constructor(title, description, dueDate){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.tasks = [];
    }

    addProjectToArray = function addP(){
        projects.push(this);
    }

    deleteProject = function deleteP(){
        for(let i = 0; i < projects.length; i+=1){
            if(this.title === projects[i].title){
                projects.splice(i, 1);                
            }
        }
    }
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


const defaultProject = new Project("Default project", "Your default project.", "11.03.2023");
defaultProject.addProjectToArray();

export { Project, projects, editProject, };