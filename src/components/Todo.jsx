import React from 'react';

const Todo = (props) => {
	return (
		<div
			onClick={() => props.toggleTask(props.todo.id)}
			className={props.todo.completed.toString()}
		>
			<h3>{props.todo.task}</h3>
		</div>
	);
};

export default Todo;
