const lists = [];

class List {
    constructor(title, description){
        this.title = title;
        this.description = description;
        this.tasks = [];
    }

    addListToArray = function addL(){
        lists.push(this);
    }

    deleteList = function deleteL(){
        for(let i = 0; i < lists.length; i+=1){
            if(this.title === lists[i].title){
                lists.splice(i, 1);                
            }
        }
    }
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

const listExample = new List("house", "default list");
const listExample2 = new List("uni", "default list");
const listExample3 = new List("work", "default list");
const listExample4 = new List("family", "default list");

export { List, lists, listExample, listExample2, listExample3, listExample4, editList};