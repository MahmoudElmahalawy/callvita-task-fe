import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { deleteTask } from "../redux/actions";

const TaskCard = ({ task }) => {
	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(deleteTask(id));
	};

	return (
		<div className="card">
			<div className="card-title">
				<h3>{task?.title}</h3>
			</div>
			<div className="card-content">
				<p>{task?.description}</p>
			</div>
			<div className="card-actions">
				<button onClick={(e) => handleDelete(task.id)}>Delete</button>
				<Link to={`/tasks/${task.id}`}>
					<button>Edit</button>
				</Link>
			</div>
		</div>
	);
};

export default TaskCard;
