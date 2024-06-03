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
		const newTodos = this.state.todos.filter(
			(todo) => todo.completed === false
		);
		this.setState({ todos: [...newTodos] });
	};

	render() {
		return (
			<div className='container'>
				<div className='list-container'>
					<div className='header'>
						<h1>Things ToDo</h1>
						<h6>(Click on a task to mark it as Completed)</h6>
					</div>
					<div>
						{this.state.todos.length === 0 ? (
							<div>
								<h2>Add Your First Task</h2>
							</div>
						) : (
							<div>
								<TodoList
									todos={this.state.todos}
									toggleTask={this.toggleTask}
								/>
							</div>
						)}
					</div>
				</div>

				<TodoForm addTask={this.addTask} clearTodos={this.clearTodos} />
			</div>
		);
	}
}

export default App;
