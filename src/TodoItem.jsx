function TodoItem({ todo, toggleTodo, deleteTodo }) {
	return (
		<div className='flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
			<div className='flex items-center gap-3 flex-1'>
				<input
					type='checkbox'
					checked={todo.completed}
					onChange={() => toggleTodo(todo.id)}
					className='w-5 h-5 text-blue-500 rounded focus:ring-blue-500'
				/>
				<span
					className={`flex-1 ${todo.completed ? "line-through text-gray-400" : "text-gray-700"}`}>
					{todo.text}
				</span>
			</div>
			<button
				onClick={() => deleteTodo(todo.id)}
				className='px-3 py-1 text-red-500 hover:bg-red-50 rounded-lg transition-colors'>
				Delete
			</button>
		</div>
	);
}

export default TodoItem;
