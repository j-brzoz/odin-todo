import { Task } from "../logic/task";
import { cleanContent } from "../page-generator/sidebar";
import * as general from "./general";
import { taskFromList, taskFromProject } from "../page-generator/taskDisplayFromListProject";

function dataTaskHandling(){
    // DOM elements
    const modalDiv = document.querySelector(".modal");
    const taskForm = document.getElementById("newTaskForm");

    // when you submit
    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        // eslint-disable-next-line no-unused-vars
        const data  = new FormData(taskForm);
        modalDiv.style.display = "none";
    });

    // handles the data
    taskForm.addEventListener("formdata", (e) => {

        const data = Array.from(e.formData);
        const title = data[0][1];
        const description = data[1][1]
        const dueDate = data[2][1]
        const priority = data[3][1]
        const parentType = data[4][1]
        const parentName = data[5][1]

    
        const newTask = new Task(title, description, dueDate, priority, parentType, parentName);
        console.log(newTask);
        newTask.addTaskToParent();

        taskForm.reset();
        cleanContent();
        if(parentType === "project")
            taskFromProject(parentName);
        else if(parentType === "list")
            taskFromList(parentName);
    })
};

function taskFormGenerator(){   
    // form
    const form = document.createElement("form");
    form.setAttribute("action", "");
    form.setAttribute("id", "newTaskForm");
    form.classList.add("inputs");

    // form elements
    // title
    const title = document.createElement("input");
    const titleAttributes = {
        type: "text",
        id: "title",
        name: "title",
        placeholder: "Title",
        minlength: 2,
        maxlength: 20,
        required: true
    }
    general.attributesSetter(title, titleAttributes);

    // description
    const description = document.createElement("input");
    const descriptionAttributes = {
        type: "text",
        id: "description",
        name: "description",
        placeholder: "Description",
        maxlength: 200,
    }
    general.attributesSetter(description, descriptionAttributes);

    // dueDate
    const dueDate = document.createElement("input");
    const dueDateAttributes = {
        type: "date",
        id: "dueDate",
        name: "dueDate",
        placeholder: "Due date",
        required: true
    }
    general.attributesSetter(dueDate, dueDateAttributes);    

    // priority
    const priority = document.createElement("input");
    const priorityAttributes = {
        type: "range",
        id: "priority",
        name: "priority",
        min: 1,
        max: 5,
        step: 1,
        required: true
    }
    general.attributesSetter(priority, priorityAttributes);

    // parentType
    // list
    const parentTypeList = document.createElement("input");
    const parentTypeListAttributes = {
        type: "radio",
        id: "parentTypeList",
        name: "parentType",
        value: "list"
    }
    general.attributesSetter(parentTypeList, parentTypeListAttributes);
    const parentTypeListLabel = document.createElement("label");
    parentTypeListLabel.setAttribute("for", "parentTypeList");
    parentTypeListLabel.textContent = "list";
    // project
    const parentTypeProject = document.createElement("input");
    const parentTypeProjectAttributes = {
        type: "radio",
        id: "parentTypeProject",
        name: "parentType",
        value: "project"
    }
    general.attributesSetter(parentTypeProject, parentTypeProjectAttributes);
    const parentTypeProjectLabel = document.createElement("label");
    parentTypeProjectLabel.setAttribute("for", "parentTypeProject");
    parentTypeProjectLabel.textContent = "project";

    // parentName
    const parentName = document.createElement("input");
    const parentNameAttributes = {
        type: "search",
        id: "parentName",
        name: "parentName",
        placeholder: "List or project name",
        minlength: 2,
        maxlength: 30,
        required: true
    }
    general.attributesSetter(parentName, parentNameAttributes);

    // submit button
    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("form", "newTaskForm");
    submitBtn.textContent = "Submit";

    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(dueDate);
    form.appendChild(priority);
    form.appendChild(parentTypeList);
    form.appendChild(parentTypeListLabel);
    form.appendChild(parentTypeProject);
    form.appendChild(parentTypeProjectLabel);
    form.appendChild(parentName);
    form.appendChild(submitBtn);

    return form;
}

function taskModal(){
    const modalDiv = document.createElement("div");
    modalDiv.classList.add("modal");
    modalDiv.setAttribute("id", "taskModal");

    const modalContent = document.createElement("div");
    modalContent.classList.add("modalContent");
    
    const text = document.createElement("p");
    text.textContent = "Add new task";

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "close";
    closeBtn.addEventListener("click", () => general.modalDisplay("taskModal"));
    
    modalContent.appendChild(text);
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(taskFormGenerator());
    modalDiv.appendChild(modalContent);

    return modalDiv
}

export { taskModal, dataTaskHandling};