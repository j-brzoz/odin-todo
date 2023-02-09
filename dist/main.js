/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addListToArray": () => (/* binding */ addListToArray),
/* harmony export */   "deleteList": () => (/* binding */ deleteList),
/* harmony export */   "editList": () => (/* binding */ editList),
/* harmony export */   "listExample": () => (/* binding */ listExample),
/* harmony export */   "lists": () => (/* binding */ lists)
/* harmony export */ });
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



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectToArray": () => (/* binding */ addProjectToArray),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "editProject": () => (/* binding */ editProject),
/* harmony export */   "projectExample": () => (/* binding */ projectExample),
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
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



/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskToParent": () => (/* binding */ addTaskToParent),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "task1": () => (/* binding */ task1),
/* harmony export */   "task2": () => (/* binding */ task2),
/* harmony export */   "task3": () => (/* binding */ task3)
/* harmony export */ });
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "./src/list.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");



class Task {
    constructor(title, description, dueDate, priority, parentType, parentName, status){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.parentType = parentType;
        this.parentName = parentName;
        this.status = status;
        this.id = Task.incrementId();
    }

    static incrementId() {
        if(!this.latestId)
            this.latestId = 1;
        else
            this.latestId += 1;
        return this.latestId;
    } 
}

const task1 = new Task ("shopping", "eggs, cheese, tomatoes", "03.03.2023", 3, "list", "life", "notDone");
const task2 = new Task ("shopping", "eggs, cheese, tomatoes", "03.03.2023", 3, "list", "life", "notDone");
const task3 = new Task ("ad campaign", "facebook ads", "08.03,2023", 5, "project", "side hustle", "inProgress");

function addTaskToParent(task) {
	if(task.parentType === "list"){
		for(let i =0; i < _list__WEBPACK_IMPORTED_MODULE_0__.lists.length; i+=1){
			if(task.parentName === _list__WEBPACK_IMPORTED_MODULE_0__.lists[i].title){
				_list__WEBPACK_IMPORTED_MODULE_0__.lists[i].tasks.push(task);
			}
		}
	}
    else if(task.parentType === "project"){
		for(let i =0; i < _project__WEBPACK_IMPORTED_MODULE_1__.projects.length; i+=1){
			if(task.parentName === _project__WEBPACK_IMPORTED_MODULE_1__.projects[i].title){
				_project__WEBPACK_IMPORTED_MODULE_1__.projects[i].tasks.push(task);
			}
		}
	}
}

function editTask(task, newTitle, newDescription, newDueDate, priority){
    for(let i = 0; i < _list__WEBPACK_IMPORTED_MODULE_0__.lists.length; i+=1){
        for(let j = 0; j < _list__WEBPACK_IMPORTED_MODULE_0__.lists[i].tasks.length; j+=1){
            if(task.id === _list__WEBPACK_IMPORTED_MODULE_0__.lists[i].tasks[j].id){
                _list__WEBPACK_IMPORTED_MODULE_0__.lists[i].tasks[j].title = newTitle;
                _list__WEBPACK_IMPORTED_MODULE_0__.lists[i].tasks[j].description = newDescription;
                _list__WEBPACK_IMPORTED_MODULE_0__.lists[i].tasks[j].dueDate = newDueDate;
                _list__WEBPACK_IMPORTED_MODULE_0__.lists[i].tasks[j].priority = priority;
            }
        }
    }
    for(let i = 0; i < _project__WEBPACK_IMPORTED_MODULE_1__.projects.length; i+=1){
        for(let j = 0; j < _project__WEBPACK_IMPORTED_MODULE_1__.projects[i].tasks.length; j+=1){
            if(task.id === _project__WEBPACK_IMPORTED_MODULE_1__.projects[i].tasks[j].id){
                _project__WEBPACK_IMPORTED_MODULE_1__.projects[i].tasks[j].title = newTitle;
                _project__WEBPACK_IMPORTED_MODULE_1__.projects[i].tasks[j].description = newDescription;
                _project__WEBPACK_IMPORTED_MODULE_1__.projects[i].tasks[j].dueDate = newDueDate;
                _project__WEBPACK_IMPORTED_MODULE_1__.projects[i].tasks[j].priority = priority;
            }
        }
    }
}

function deleteTask(task){
    for(let i = 0; i < _list__WEBPACK_IMPORTED_MODULE_0__.lists.length; i+=1){
        for(let j = 0; j < _list__WEBPACK_IMPORTED_MODULE_0__.lists[i].tasks.length; j+=1){
            if(task.id === _list__WEBPACK_IMPORTED_MODULE_0__.lists[i].tasks[j].id){
                _list__WEBPACK_IMPORTED_MODULE_0__.lists[i].tasks.splice(j, 1);                
            }
        }
    }
    for(let i = 0; i < _project__WEBPACK_IMPORTED_MODULE_1__.projects.length; i+=1){
        for(let j = 0; j < _project__WEBPACK_IMPORTED_MODULE_1__.projects[i].tasks.length; j+=1){
            if(task.id === _project__WEBPACK_IMPORTED_MODULE_1__.projects[i].tasks[j].id){
                _project__WEBPACK_IMPORTED_MODULE_1__.projects[i].tasks.splice(j, 1);
            }
        }
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ "./src/list.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");




(0,_list__WEBPACK_IMPORTED_MODULE_1__.addListToArray)(_list__WEBPACK_IMPORTED_MODULE_1__.listExample);
(0,_project__WEBPACK_IMPORTED_MODULE_2__.addProjectToArray)(_project__WEBPACK_IMPORTED_MODULE_2__.projectExample);

(0,_task__WEBPACK_IMPORTED_MODULE_0__.addTaskToParent)(_task__WEBPACK_IMPORTED_MODULE_0__.task1);
(0,_task__WEBPACK_IMPORTED_MODULE_0__.addTaskToParent)(_task__WEBPACK_IMPORTED_MODULE_0__.task2);
(0,_task__WEBPACK_IMPORTED_MODULE_0__.addTaskToParent)(_task__WEBPACK_IMPORTED_MODULE_0__.task3);

(0,_task__WEBPACK_IMPORTED_MODULE_0__.editTask)(_task__WEBPACK_IMPORTED_MODULE_0__.task1, "bills", "water + energy", "03 Feb 2023", 3, "list", "life");
(0,_task__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(_task__WEBPACK_IMPORTED_MODULE_0__.task2);

(0,_list__WEBPACK_IMPORTED_MODULE_1__.editList)( _list__WEBPACK_IMPORTED_MODULE_1__.listExample, "house", "dummy text");
(0,_project__WEBPACK_IMPORTED_MODULE_2__.editProject)( _project__WEBPACK_IMPORTED_MODULE_2__.projectExample, "startup", "dummy text2");

(0,_project__WEBPACK_IMPORTED_MODULE_2__.deleteProject)(_project__WEBPACK_IMPORTED_MODULE_2__.projectExample);

console.log(_project__WEBPACK_IMPORTED_MODULE_2__.projects);
console.log(_list__WEBPACK_IMPORTED_MODULE_1__.lists);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVyQiwrQ0FBUSxDQUFDLHdDQUFLO0FBQ2QsaURBQVUsQ0FBQyx3Q0FBSzs7QUFFaEIsK0NBQVEsRUFBRSw4Q0FBVztBQUNyQixxREFBVyxFQUFFLG9EQUFjOztBQUUzQix1REFBYSxDQUFDLG9EQUFjOztBQUU1QixZQUFZLDhDQUFRO0FBQ3BCLFlBQVksd0NBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbGlzdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTGlzdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB9XG59XG5cbmNvbnN0IGxpc3RzID0gW107XG5jb25zdCBsaXN0RXhhbXBsZSA9IG5ldyBMaXN0KFwibGlmZVwiLCBcImRlZmF1bHQgbGlzdFwiKTtcblxuZnVuY3Rpb24gYWRkTGlzdFRvQXJyYXkobGlzdCl7XG4gICAgbGlzdHMucHVzaChsaXN0KTtcbn1cblxuZnVuY3Rpb24gZWRpdExpc3QobGlzdCwgbmV3VGl0bGUsIG5ld0Rlc2NyaXB0aW9uKXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGlzdHMubGVuZ3RoOyBpKz0xKXtcbiAgICAgICAgaWYobGlzdC50aXRsZSA9PT0gbGlzdHNbaV0udGl0bGUpe1xuICAgICAgICAgICAgbGlzdHNbaV0udGl0bGUgPSBuZXdUaXRsZTtcbiAgICAgICAgICAgIGxpc3RzW2ldLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgbGlzdHNbaV0udGFza3MubGVuZ3RoOyBqKz0xKXtcbiAgICAgICAgICAgICAgICBsaXN0c1tpXS50YXNrc1tqXS5wYXJlbnROYW1lID0gbmV3VGl0bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUxpc3QobGlzdCl7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxpc3RzLmxlbmd0aDsgaSs9MSl7XG4gICAgICAgIGlmKGxpc3QudGl0bGUgPT09IGxpc3RzW2ldLnRpdGxlKXtcbiAgICAgICAgICAgIGxpc3RzLnNwbGljZShpLCAxKTsgICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7IGxpc3RzLCBsaXN0RXhhbXBsZSwgYWRkTGlzdFRvQXJyYXksIGVkaXRMaXN0LCBkZWxldGVMaXN0IH07IiwiY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB9XG59XG5cbmNvbnN0IHByb2plY3RzID0gW107XG5jb25zdCBwcm9qZWN0RXhhbXBsZSA9IG5ldyBQcm9qZWN0KFwic2lkZSBodXN0bGVcIiwgXCJkZWZhdWx0IHByb2plY3RcIiwgXCIxMS4wMy4yMDIzXCIpO1xuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9BcnJheShwcm9qZWN0KXtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBlZGl0UHJvamVjdChwcm9qZWN0LCBuZXdUaXRsZSwgbmV3RGVzY3JpcHRpb24sIG5ld0R1ZURhdGUpe1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrPTEpe1xuICAgICAgICBpZihwcm9qZWN0LnRpdGxlID09PSBwcm9qZWN0c1tpXS50aXRsZSl7XG4gICAgICAgICAgICBwcm9qZWN0c1tpXS50aXRsZSA9IG5ld1RpdGxlO1xuICAgICAgICAgICAgcHJvamVjdHNbaV0uZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIHByb2plY3RzW2ldLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHByb2plY3RzW2ldLnRhc2tzLmxlbmd0aDsgais9MSl7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNbaV0udGFza3Nbal0ucGFyZW50TmFtZSA9IG5ld1RpdGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3Qpe1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrPTEpe1xuICAgICAgICBpZihwcm9qZWN0LnRpdGxlID09PSBwcm9qZWN0c1tpXS50aXRsZSl7XG4gICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaSwgMSk7ICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBwcm9qZWN0cywgcHJvamVjdEV4YW1wbGUsIGFkZFByb2plY3RUb0FycmF5LCBlZGl0UHJvamVjdCwgZGVsZXRlUHJvamVjdCB9OyIsImltcG9ydCB7IGxpc3RzIH0gZnJvbSBcIi4vbGlzdFwiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHBhcmVudFR5cGUsIHBhcmVudE5hbWUsIHN0YXR1cyl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMucGFyZW50VHlwZSA9IHBhcmVudFR5cGU7XG4gICAgICAgIHRoaXMucGFyZW50TmFtZSA9IHBhcmVudE5hbWU7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICB0aGlzLmlkID0gVGFzay5pbmNyZW1lbnRJZCgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbmNyZW1lbnRJZCgpIHtcbiAgICAgICAgaWYoIXRoaXMubGF0ZXN0SWQpXG4gICAgICAgICAgICB0aGlzLmxhdGVzdElkID0gMTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5sYXRlc3RJZCArPSAxO1xuICAgICAgICByZXR1cm4gdGhpcy5sYXRlc3RJZDtcbiAgICB9IFxufVxuXG5jb25zdCB0YXNrMSA9IG5ldyBUYXNrIChcInNob3BwaW5nXCIsIFwiZWdncywgY2hlZXNlLCB0b21hdG9lc1wiLCBcIjAzLjAzLjIwMjNcIiwgMywgXCJsaXN0XCIsIFwibGlmZVwiLCBcIm5vdERvbmVcIik7XG5jb25zdCB0YXNrMiA9IG5ldyBUYXNrIChcInNob3BwaW5nXCIsIFwiZWdncywgY2hlZXNlLCB0b21hdG9lc1wiLCBcIjAzLjAzLjIwMjNcIiwgMywgXCJsaXN0XCIsIFwibGlmZVwiLCBcIm5vdERvbmVcIik7XG5jb25zdCB0YXNrMyA9IG5ldyBUYXNrIChcImFkIGNhbXBhaWduXCIsIFwiZmFjZWJvb2sgYWRzXCIsIFwiMDguMDMsMjAyM1wiLCA1LCBcInByb2plY3RcIiwgXCJzaWRlIGh1c3RsZVwiLCBcImluUHJvZ3Jlc3NcIik7XG5cbmZ1bmN0aW9uIGFkZFRhc2tUb1BhcmVudCh0YXNrKSB7XG5cdGlmKHRhc2sucGFyZW50VHlwZSA9PT0gXCJsaXN0XCIpe1xuXHRcdGZvcihsZXQgaSA9MDsgaSA8IGxpc3RzLmxlbmd0aDsgaSs9MSl7XG5cdFx0XHRpZih0YXNrLnBhcmVudE5hbWUgPT09IGxpc3RzW2ldLnRpdGxlKXtcblx0XHRcdFx0bGlzdHNbaV0udGFza3MucHVzaCh0YXNrKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbiAgICBlbHNlIGlmKHRhc2sucGFyZW50VHlwZSA9PT0gXCJwcm9qZWN0XCIpe1xuXHRcdGZvcihsZXQgaSA9MDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSs9MSl7XG5cdFx0XHRpZih0YXNrLnBhcmVudE5hbWUgPT09IHByb2plY3RzW2ldLnRpdGxlKXtcblx0XHRcdFx0cHJvamVjdHNbaV0udGFza3MucHVzaCh0YXNrKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZWRpdFRhc2sodGFzaywgbmV3VGl0bGUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEdWVEYXRlLCBwcmlvcml0eSl7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxpc3RzLmxlbmd0aDsgaSs9MSl7XG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBsaXN0c1tpXS50YXNrcy5sZW5ndGg7IGorPTEpe1xuICAgICAgICAgICAgaWYodGFzay5pZCA9PT0gbGlzdHNbaV0udGFza3Nbal0uaWQpe1xuICAgICAgICAgICAgICAgIGxpc3RzW2ldLnRhc2tzW2pdLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgICAgICAgICAgICAgbGlzdHNbaV0udGFza3Nbal0uZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICBsaXN0c1tpXS50YXNrc1tqXS5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgICAgICAgICAgICAgICBsaXN0c1tpXS50YXNrc1tqXS5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrPTEpe1xuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgcHJvamVjdHNbaV0udGFza3MubGVuZ3RoOyBqKz0xKXtcbiAgICAgICAgICAgIGlmKHRhc2suaWQgPT09IHByb2plY3RzW2ldLnRhc2tzW2pdLmlkKXtcbiAgICAgICAgICAgICAgICBwcm9qZWN0c1tpXS50YXNrc1tqXS50aXRsZSA9IG5ld1RpdGxlO1xuICAgICAgICAgICAgICAgIHByb2plY3RzW2ldLnRhc2tzW2pdLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgcHJvamVjdHNbaV0udGFza3Nbal0uZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNbaV0udGFza3Nbal0ucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayh0YXNrKXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGlzdHMubGVuZ3RoOyBpKz0xKXtcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGxpc3RzW2ldLnRhc2tzLmxlbmd0aDsgais9MSl7XG4gICAgICAgICAgICBpZih0YXNrLmlkID09PSBsaXN0c1tpXS50YXNrc1tqXS5pZCl7XG4gICAgICAgICAgICAgICAgbGlzdHNbaV0udGFza3Muc3BsaWNlKGosIDEpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKz0xKXtcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHByb2plY3RzW2ldLnRhc2tzLmxlbmd0aDsgais9MSl7XG4gICAgICAgICAgICBpZih0YXNrLmlkID09PSBwcm9qZWN0c1tpXS50YXNrc1tqXS5pZCl7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNbaV0udGFza3Muc3BsaWNlKGosIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyB0YXNrMSwgdGFzazIsIHRhc2szLCBhZGRUYXNrVG9QYXJlbnQsIGVkaXRUYXNrLCBkZWxldGVUYXNrfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHRhc2sxLCB0YXNrMiwgdGFzazMsIGFkZFRhc2tUb1BhcmVudCwgZWRpdFRhc2ssIGRlbGV0ZVRhc2t9IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB7IGxpc3RzLCBsaXN0RXhhbXBsZSwgYWRkTGlzdFRvQXJyYXksIGVkaXRMaXN0IH0gZnJvbSBcIi4vbGlzdFwiO1xuaW1wb3J0IHsgcHJvamVjdHMsIHByb2plY3RFeGFtcGxlLCBhZGRQcm9qZWN0VG9BcnJheSwgZWRpdFByb2plY3QsIGRlbGV0ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCJcblxuYWRkTGlzdFRvQXJyYXkobGlzdEV4YW1wbGUpO1xuYWRkUHJvamVjdFRvQXJyYXkocHJvamVjdEV4YW1wbGUpO1xuXG5hZGRUYXNrVG9QYXJlbnQodGFzazEpO1xuYWRkVGFza1RvUGFyZW50KHRhc2syKTtcbmFkZFRhc2tUb1BhcmVudCh0YXNrMyk7XG5cbmVkaXRUYXNrKHRhc2sxLCBcImJpbGxzXCIsIFwid2F0ZXIgKyBlbmVyZ3lcIiwgXCIwMyBGZWIgMjAyM1wiLCAzLCBcImxpc3RcIiwgXCJsaWZlXCIpO1xuZGVsZXRlVGFzayh0YXNrMik7XG5cbmVkaXRMaXN0KCBsaXN0RXhhbXBsZSwgXCJob3VzZVwiLCBcImR1bW15IHRleHRcIik7XG5lZGl0UHJvamVjdCggcHJvamVjdEV4YW1wbGUsIFwic3RhcnR1cFwiLCBcImR1bW15IHRleHQyXCIpO1xuXG5kZWxldGVQcm9qZWN0KHByb2plY3RFeGFtcGxlKTtcblxuY29uc29sZS5sb2cocHJvamVjdHMpO1xuY29uc29sZS5sb2cobGlzdHMpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9