class List {
    constructor(title, description){
        this.title = title;
        this.description = description;
        this.tasks = [];
    }
}

const lists = [];
const listExample = new List("life", "default list");

function addListToArray(list){
    lists.push(list);
}

function editList(list, newTitle, newDescription){
    for(let i = 0; i < lists.length; i+=1){
        if(list.title === lists[i].title){
            lists[i].title = newTitle;
            lists[i].description = newDescription;
            for(let j = 0; j < lists[i].tasks.length; j+=1){
                lists[i].tasks[j].parentName = newTitle;
            }
        }
    }
}

function deleteList(list){
    for(let i = 0; i < lists.length; i+=1){
        if(list.title === lists[i].title){
            lists.splice(i, 1);                
        }
    }
}

export { lists, listExample, addListToArray, editList, deleteList };