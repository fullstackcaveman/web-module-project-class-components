import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';

const todos = [
	// {
	// 	id: '8675309',
	// 	task: 'Test Task',
	// 	completed: false,
	// },
	// {
	// 	id: '18675309',
	// 	task: 'Test Task 2',
	// 	completed: false,
	// },
];

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: todos,
		};
	}

	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state

	addTask = (taskName) => {
		const newTask = {
			task: taskName,
			id: new Date(),
			completed: false,
		};
		this.setState({
			todos: [...this.state.todos, newTask],
		});
	};

	toggleTask = (taskId) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				return todo.id === taskId
					? { ...todo, completed: !todo.completed }
					: todo;
			}),
		});
	};

	clearTodos = () => {
		console.log('cleared');
		const newTodos = this.state.todos.filter(
			(todo) => todo.completed === false
		);
		this.setState({ todos: [...newTodos] });
	};

	render() {
		return (
			<div>
				<h2>Things ToDo</h2>
				{this.state.todos.length === 0 ? (
					<h2>Add Your First Task Below</h2>
				) : (
					<TodoList todos={this.state.todos} toggleTask={this.toggleTask} />
				)}

				<TodoForm addTask={this.addTask} clearTodos={this.clearTodos} />
			</div>
		);
	}
}

export default App;
