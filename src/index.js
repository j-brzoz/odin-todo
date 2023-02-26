// import { task1, task2, task3, addTaskToParent, editTask, deleteTask} from "./task";
// import { lists, listExample, addListToArray, editList } from "./list";
// import { projects, projectExample, addProjectToArray, editProject, deleteProject } from "./project"

// addListToArray(listExample);


// addTaskToParent(task1);
// addTaskToParent(task2);
// addTaskToParent(task3);

// editTask(task1, "bills", "water + energy", "03 Feb 2023", 3, "list", "life");
// deleteTask(task2);

// editList( listExample, "house", "dummy text");
// editProject( projectExample, "startup", "dummy text2");

// deleteProject(projectExample);

// console.log(projects);
// console.log(lists);

import pageStucture from "./page-generator/pageStructure";
import { dataTaskHandling } from "./modals/taskModal";
import { dataListHandling } from "./modals/listModal";
import { dataProjectHandling } from "./modals/projectModal";

pageStucture();
dataTaskHandling();
dataListHandling();
dataProjectHandling();