import {addNew} from "./addnew.js"
import {complete} from "./complete.js"
import {setdefault} from "./setdefault.js"
import {priority} from "./priority.js"
import {viewProjects} from "./viewallprojects.js"
import {edit} from "./edit.js"
import {deleteForm} from "./delete.js"


// Adding new task in Todo List
document.getElementById("addtask").addEventListener('click', addNew);
// Complete task in todo list
document.getElementById("comptask").addEventListener('click', complete);
// Set as Default
document.getElementById("default").addEventListener('click', setdefault);
// Set Priority
document.getElementById("priority").addEventListener('click', priority);

// All Projects
document.getElementById("allprojects").addEventListener('click', viewProjects);
// Projects in Todo List
document.getElementById("projecttodos").addEventListener('click', () =>{console.log('Viewing all todos in each project'); });
// Edit task in todo list
document.getElementById("edittask").addEventListener('click', edit);
//Delete a Task
document.getElementById("delete"),addEventListener('click', deleteForm);