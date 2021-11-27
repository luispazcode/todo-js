import {Todo} from './todo.class';


export class TodoList {

    constructor() {

        // this.todos = [];
        this.cargarLocalStorage();

    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guarLocalStorage();

    }

    eliminarTodo(id) {
        this.todos = this.todos.filter(todo=>todo.id != id);
        this.guarLocalStorage();
    }

    marcarCompletado(id) {
        for(const todo of this.todos) {
            if(todo.id == id) {
                todo.completado = !todo.completado;
                this.guarLocalStorage();

                break;
            }
        }
    }

    eliminarCompletados() {
        this.todos = this.todos.filter(todo=>!todo.completado);
        this.guarLocalStorage();
        
    }

    guarLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos)); // localstorage solo recibe string porlo que cualquier objeto o arreglo hay que convertirlo a string via JSON
    }

    cargarLocalStorage() {
        // if (localStorage.getItem('todo')) {
        //     this.todos = JSON.parse(localStorage.getItem('todo'));
        //     console.log('cargar local', this.todos)
        // } else {
        //     this.todos = [];
        // }
        this.todos = (localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : [];
        // JSON.parse hace lo contrario a stringify, convierte el json a un arreglo u objeto

        this.todos = this.todos.map(obj => Todo.fromJson(obj));
    }
}