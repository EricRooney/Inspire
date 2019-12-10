import TodoService from "../services/todo-service.js";
import store from "../store.js";
import task from "../models/task.js";
import todoService from "../services/todo-service.js";

//TODO Create the render function
function _drawTodos() {
  let template = "";
  let tasks = store.State.tasks;
  let strike = "";
  let endstrike = "";
  let completed = "";
  tasks.forEach(Task => {
    if (Task.completed == true) {
      strike = "<s>";
      endstrike = "</s>";
      completed = " Just Kidding! ";
    } else {
      strike = "";
      endstrike = "";
      completed = " Finished! ";
    }
    console.log(completed);

    template +=
      `
  <li  style="list-style-type:none" ><button id="finished" type="button" class="bg-primary border-0" onclick="app.todoController.toggleTodoStatus('${Task._id}')">
  <span aria-hidden="true"> ${completed} </span></button>` +
      `${strike}` +
      `
  ${Task.description}` +
      `${endstrike}` +
      `
  <button type="button" class="bg-secondary border-0" onclick="app.todoController.removeTodo('${Task._id}')">
  <span aria-hidden="true">Delete</span></button>
  </li>
  `;
  });
  document.getElementById("todos").innerHTML = template;
}

function _drawTotal() {
  let template = `Total Tasks: ${store.State.tasks.length}`;
  document.getElementById("total").innerHTML = template;
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    console.log("Where's");
    _drawTotal();
    store.subscribe("tasks", _drawTodos);
    store.subscribe("tasks", _drawTotal);
    TodoService.getTodos();
  }

  async addTodo(event) {
    event.preventDefault();
    var form = event.target;

    var todo = {
      description: form.name.value
    };
    console.log(todo);

    try {
      await TodoService.addTodoAsync(todo);
      await TodoService.getTodos();
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  async toggleTodoStatus(todoId) {
    try {
      await TodoService.toggleTodoStatusAsync(todoId);
      await TodoService.getTodos();
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  async removeTodo(todoId) {
    try {
      await TodoService.removeTodoAsync(todoId);
      await TodoService.getTodos();
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }
}
