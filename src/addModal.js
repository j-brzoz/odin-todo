import { Task } from "./task"

// changes modal display
function modalDisplay() {
    const change = document.getElementById("modal");
    change.style.display = change.style.display !== "block" ? "block" : "none";
};

function dataHandling(){
    // DOM elements
    const modalDiv = document.createElement("div");
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
    })
};

// for setting multiple attributes
function attributesSetter(element, elementAttributes){
    Object.keys(elementAttributes).forEach(attribute => {
        element.setAttribute(attribute, elementAttributes[attribute])
    })
}

function formGenerator(){   
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
        maxlength: 30,
        required: true
    }
    attributesSetter(title, titleAttributes);

    // description
    const description = document.createElement("input");
    const descriptionAttributes = {
        type: "text",
        id: "description",
        name: "description",
        placeholder: "Description",
        maxlength: 200,
    }
    attributesSetter(description, descriptionAttributes);

    // dueDate
    const dueDate = document.createElement("input");
    const dueDateAttributes = {
        type: "date",
        id: "dueDate",
        name: "dueDate",
        placeholder: "Due date",
        required: true
    }
    attributesSetter(dueDate, dueDateAttributes);    

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
    attributesSetter(priority, priorityAttributes);

    // parentType
    // list
    const parentTypeList = document.createElement("input");
    const parentTypeListAttributes = {
        type: "radio",
        id: "parentTypeList",
        name: "parentType",
        value: "list"
    }
    attributesSetter(parentTypeList, parentTypeListAttributes);
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
    attributesSetter(parentTypeProject, parentTypeProjectAttributes);
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
    attributesSetter(parentName, parentNameAttributes);

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

function modal(){
    const modalDiv = document.createElement("div");
    modalDiv.classList.add("modal");
    modalDiv.setAttribute("id", "modal")

    const modalContent = document.createElement("div");
    modalContent.classList.add("modalContent");

    const text = document.createElement("p");
    text.textContent = "Add new task";

    modalContent.appendChild(text);
    modalContent.appendChild(formGenerator());
    modalDiv.appendChild(modalContent);

    // lets you to exit modal by clicking outside the modal
    window.onclick = function modalToNone(event) {
        if (event.target === modalDiv) {
          modalDiv.style.display = "none";
        }
    };
    return modalDiv
}

export { modal, modalDisplay, dataHandling};