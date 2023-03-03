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

const defaultList = new List("Default list", "Your default list.");
defaultList.addListToArray();

export { List, lists, editList};