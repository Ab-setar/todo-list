import { useState } from "react";

function TodoForm({ addTodo }) {
	const [input, setInput] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (input.trim()) {
			addTodo(input);
			setInput("");
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='mb-6'>
			<div className='flex gap-2'>
				<input
					type='text'
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder='Add a new todo...'
					className='flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
				/>
				<button
					type='submit'
					className='px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'>
					Add
				</button>
			</div>
		</form>
	);
}

export default TodoForm;
