import store from "../store.js";
import task from "../models/task.js";

// @ts-ignore
const _todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/DoubleDogDare/todos/",
  timeout: 8000
});

class TodoService {
  async getTodos() {
    // don't forget to instantiate todos and commit
    console.log("Waldo");
    console.log("Getting the Todo List");
    let res = await _todoApi.get();
    store.commit("tasks", res.data.data);
    console.log("from API", res.data.data);
    console.log("fromstore", store.State.tasks);

    //store.commit("tasks", res.data.data);
  }

  async addTodoAsync(todo) {
    let Task = new task(todo);
    console.log(Task);
    let res = await _todoApi.post("", Task);
    //store.commit("tasks", res.data.data);
    //console.log("from store", store.State.tasks);

    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  async toggleTodoStatusAsync(todoId) {
    let todo = store.State.tasks.find(todo => todo._id == todoId);
    if (todo.completed == true) {
      todo.completed = false;
    } else if (todo.completed == false) {
      todo.completed = true;
    }
    console.log("From toggle", todo);

    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    let res = await _todoApi.put(todoId, todo);
    console.log("from toggle api", res);

    //TODO do you care about this data? or should you go get something else?
  }

  async removeTodoAsync(todoId) {
    await _todoApi.delete(todoId);

    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
  }
}

const todoService = new TodoService();
export default todoService;
