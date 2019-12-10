/*const generateId = function() {
  //FIXME Don't need this, id is genereated by server
  return `${Math.floor(Math.random() * 10000)}-${Math.floor(
    Math.random() * 10000
  )}`;
};
*/

export default class task {
  constructor(data) {
    //the server will create these properties for you
    this.id = data._id;
    this.completed = data.completed;
    // this.user = data.user; won't need a user defined
    //You will need to provide a description
    this.description = data.description;
  }

  get template() {
    return `
    <button> type="button" class="bg-transparent border-0" onclick="app.todoController.removeTodo('${this.id}')">
    <span aria-hidden="true">&times;</span></button>
    ${this.description}
    <br />
    `;
  }
}
