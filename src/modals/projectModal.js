import { Project } from "../logic/project";
import * as general from "./general";
import { sidebar } from "../page-generator/sidebar";

function dataProjectHandling(){
    // DOM elements
    const modalDiv = document.querySelector(".modal");
    const projectForm = document.getElementById("newProjectForm");
    
    // when you submit
    projectForm.addEventListener("submit", (e) => {
        e.preventDefault();
        // eslint-disable-next-line no-unused-vars
        const data  = new FormData(projectForm);
        modalDiv.style.display = "none";
    });

    // handles the data
    projectForm.addEventListener("formdata", (e) => {

        const data = Array.from(e.formData);
        const title = data[0][1];
        const description = data[1][1];
        const dueDate = data[2][1];
        
        const newProject = new Project(title, description, dueDate);
        console.log(newProject);
        newProject.addProjectToArray();

        projectForm.reset();

        general.cleanSidebar();
        document.body.appendChild(sidebar());
    })
};

function projectFormGenerator(){   
    // form
    const form = document.createElement("form");
    form.setAttribute("action", "");
    form.setAttribute("id", "newProjectForm");
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

    // submit button
    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("form", "newProjectForm");
    submitBtn.textContent = "Submit";

    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(dueDate);
    form.appendChild(submitBtn);

    return form;
}

function projectModal(){
    const modalDiv = document.createElement("div");
    modalDiv.classList.add("modal");
    modalDiv.setAttribute("id", "projectModal");

    const modalContent = document.createElement("div");
    modalContent.classList.add("modalContent");
    
    const text = document.createElement("p");
    text.textContent = "Add new project";

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "close";
    closeBtn.addEventListener("click", () => general.modalDisplay("projectModal"));

    modalContent.appendChild(text);
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(projectFormGenerator());
    modalDiv.appendChild(modalContent);

    return modalDiv
}

export { projectModal, dataProjectHandling};