import React from 'react';

const Todo = (props) => {
	return (
		<div
			onClick={() => props.toggleTask(props.todo.id)}
			className={props.todo.completed.toString()}
		>
			<h2>{props.todo.task}</h2>
		</div>
	);
};

export default Todo;
