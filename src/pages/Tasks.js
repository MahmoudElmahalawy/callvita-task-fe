import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TaskCard from "../components/TaskCard";

import { getTasks } from "../redux/actions";

const Tasks = () => {
	const dispatch = useDispatch();

	const { tasks } = useSelector((state) => state.data);

	useEffect(() => {
		dispatch(getTasks());
	}, []);

	return Array.isArray(tasks) && tasks?.length > 0 ? (
		<div className="container p-50">
			<h1 className="page-title">Tasks</h1>
			<main className="grid">
				{tasks !== null && tasks.map((task) => <TaskCard key={task.id} task={task} />)}
			</main>
		</div>
	) : (
		<h1 className="page-title">No Tasks</h1>
	);
};

export default Tasks;
