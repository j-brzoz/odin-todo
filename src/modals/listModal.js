import { List } from "../logic/list";
import * as general from "./general";

function dataListHandling(){
    // DOM elements
    const modalDiv = document.querySelector(".modal");
    const listForm = document.getElementById("newListForm");

    // when you submit
    listForm.addEventListener("submit", (e) => {
        e.preventDefault();
        // eslint-disable-next-line no-unused-vars
        const data  = new FormData(listForm);
        modalDiv.style.display = "none";
    });

    // handles the data
    listForm.addEventListener("formdata", (e) => {

        const data = Array.from(e.formData);
        const title = data[0][1];
        const description = data[1][1]
        
        const newList = new List(title, description);
        console.log(newList);
        newList.addListToArray();

        listForm.reset();
    })
};

function listFormGenerator(){   
    // form
    const form = document.createElement("form");
    form.setAttribute("action", "");
    form.setAttribute("id", "newListForm");
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

    // submit button
    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("form", "newListForm");
    submitBtn.textContent = "Submit";

    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(submitBtn);

    return form;
}

function listModal(){
    const modalDiv = document.createElement("div");
    modalDiv.classList.add("modal");
    modalDiv.setAttribute("id", "listModal");

    const modalContent = document.createElement("div");
    modalContent.classList.add("modalContent");
    
    const text = document.createElement("p");
    text.textContent = "Add new list";

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "close";
    closeBtn.addEventListener("click", () => general.modalDisplay("listModal"));

    modalContent.appendChild(text);
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(listFormGenerator());
    modalDiv.appendChild(modalContent);

    return modalDiv
}

export { listModal, dataListHandling};