import React from 'react';
import {
	Avatar,
	Button,
	Divider,
	Grid,
	Paper,
	TextField,
	Typography,
} from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';

class TodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			todoText: '',
			disabled: true,
		};
	}

	handleChange = (e) => {
		// Disables submit button if input is empty
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

	// Form Styling Props
	paperStyle = {
		padding: 20,
		height: 'auto',
		width: 250,
		margin: '20px auto',
	};

	avatarStyle = { backgroundColor: '#A9D884' };

	inputStyle = {
		margin: '5px auto',
	};

	submitBtnStyle = {
		marginTop: '10px',
		backgroundColor: '#A9D884',
	};
	// End of Form Styling Props

	render() {
		return (
			<div className='form'>
				<Grid align='center'>
					<Paper elevation={10} style={this.paperStyle}>
						<Grid align='center'>
							<Avatar style={this.avatarStyle}>
								<AssignmentIcon />
							</Avatar>
						</Grid>
						<Typography gutterBottom variant='h4'>
							Task Actions
						</Typography>
						<form onSubmit={this.handleSubmit} onReset={this.handleClear}>
							<Typography gutterBottom variant='h6'>
								Add A Task
							</Typography>
							<TextField
								style={this.inputStyle}
								label='Add A Task'
								variant='outlined'
								size='small'
								fullWidth
								required
								name='todoText'
								placeholder='Add A Task'
								value={this.state.todoText}
								onChange={this.handleChange}
							/>
							<Button
								style={this.submitBtnStyle}
								type='submit'
								color='primary'
								variant='contained'
								fullWidth
								disabled={this.state.disabled}
							>
								Add ToDo
							</Button>
							<div>
								<br />
								<Typography gutterBottom>- OR -</Typography>
								<Divider variant='middle' />
							</div>
							<Button type='reset' color='secondary' variant='contained'>
								Clear Completed Tasks
							</Button>
						</form>
					</Paper>
				</Grid>
			</div>
		);
	}
}

export default TodoForm;
