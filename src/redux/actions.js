import taskService from "../services/task.service";

const getTasksAction = (tasks) => ({
	type: "GET_TASKS",
	payload: tasks,
});

const getSingleTaskAction = (task) => ({
	type: "GET_SINGLE_TASK",
	payload: task,
});

const addTaskAction = (task) => {
	return {
		type: "ADD_TASK",
	};
};

const editTaskAction = () => {
	return {
		type: "EDIT_TASK",
	};
};

const deleteTaskAction = () => {
	return {
		type: "DELETE_TASK",
	};
};

export const getTasks = () => (dispatch) => {
	taskService.getAll().then((res) => dispatch(getTasksAction(res.data.tasks)));
};

export const getSingleTask = (id) => (dispatch) => {
	taskService.getById(id).then((res) => {
		dispatch(getSingleTaskAction(res.data.task));
	});
};

export const addTask = (task) => (dispatch) => {
	taskService.post(task).then((res) => {
		dispatch(addTaskAction());
		dispatch(getTasks());
	});
};

export const editTask = (id, task) => (dispatch) => {
	taskService.update(id, task).then((res) => {
		dispatch(editTaskAction());
		dispatch(getTasks());
	});
};

export const deleteTask = (id) => (dispatch) => {
	taskService.delete(id).then((res) => {
		dispatch(deleteTaskAction());
		dispatch(getTasks());
	});
};
