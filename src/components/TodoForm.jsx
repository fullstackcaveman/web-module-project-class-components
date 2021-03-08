import React from 'react';

class TodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			todoText: '',
			disabled: true,
		};
	}

	handleChange = (e) => {
		!e.target.value
			? this.setState({ [e.target.name]: e.target.value, disabled: true })
			: this.setState({ [e.target.name]: e.target.value, disabled: false });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addTask(this.state.todoText);
		this.setState({
			todoText: '',
			disabled: true,
		});
	};

	handleClear = (e) => {
		e.preventDefault();
		this.props.clearTodos();
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit} onReset={this.handleClear}>
					<input
						type='text'
						name='todoText'
						placeholder='Add A Task'
						value={this.state.todoText}
						onChange={this.handleChange}
					/>
					<button type='submit' disabled={this.state.disabled}>
						Add ToDo
					</button>
					<button type='reset'>Clear Completed</button>
				</form>
			</div>
		);
	}
}

export default TodoForm;
