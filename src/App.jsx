//import "./App.css";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
	const [todos, setTodos] = useState([]);
	const addTodo = (text) => {
		const newTodo = {
			id: Date.now(),
			text: text,
			completed: false,
		};

		setTodos((prevTodos) => [...prevTodos, newTodo]);
	};

	const toggleTodo = (id) => {
		setTodos((prevTodos) =>
			prevTodos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo,
			),
		);
	};

	const deleteTodo = (id) => {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-blue-50 to-purple-50'>
			<div className='container mx-auto px-4 py-8 max-w-2xl'>
				<h1 className='text-4xl font-bold text-center text-gray-800 mb-8'>
					Todo List
				</h1>

				<TodoForm addTodo={addTodo} />

				<div className='space-y-3'>
					{todos.length === 0 ? (
						<p className='text-center text-gray-500 py-8'>
							No todos yet. Add one above!
						</p>
					) : (
						todos.map((todo) => (
							<TodoItem
								key={todo.id}
								todo={todo}
								toggleTodo={toggleTodo}
								deleteTodo={deleteTodo}
							/>
						))
					)}
				</div>

				{todos.length > 0 && (
					<p className='text-center text-gray-500 mt-6'>
						Total: {todos.length} | Completed:{" "}
						{todos.filter((t) => t.completed).length}
					</p>
				)}
			</div>
		</div>
	);
}

export default App;
