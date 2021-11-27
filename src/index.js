import './styles.css';
// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';
import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

// const tarea = new Todo('Aprender javascript!!');
// todoList.nuevoTodo(tarea);


// console.log(todoList);

// crearTodoHtml(tarea);


// Localstorage

// localStorage.setItem('mi-key', 'ABC1233');
// sessionStorage.setItem('mi-key', 'ABC1233');

// setTimeout(() => {
//     localStorage.removeItem('mi-key');
// }, 1500);

todoList.todos.forEach(todo => crearTodoHtml(todo));

// const newTodo = new Todo('Aprender javascript!!');
// todoList.nuevoTodo(newTodo)
// todoList.todos[0].imprimirClase();

// console.log(todoList.todos);