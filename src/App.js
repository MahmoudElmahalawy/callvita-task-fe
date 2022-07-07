import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Tasks from "./pages/Tasks";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Navigate to="/tasks" />} />
				<Route exact path="/tasks" element={<Tasks />} />
				<Route exact path="/add" element={<TaskForm formType="add" />} />
				<Route exact path="/tasks/:taskId" element={<TaskForm formType="edit" />} />
				<Route exact path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
