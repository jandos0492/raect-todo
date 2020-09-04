import React from 'react';
import ReactDom from 'react-dom';

const TodoList = () => {
	const items = ['Drink Coffee', 'Build Awesome App 2'];
	return (
		<ul>
			<li>{items[0]}</li>
			<li>{items[1]}</li>
		</ul>
	)
}
const AppHeader = () => {
	return <h1>My Todo List</h1>;
}

const SearchPanel = () => {

	const searchTeaxt = 'Type here to search';
	const searchStyle = {
		fontSize: "20px"
	};
	return <input 
	style={searchStyle}
	placeholder= { searchTeaxt } />;
}

const App = () => {

	return (
		<div>
			<AppHeader />
			<SearchPanel />
			<TodoList />
		</div>
	)
}

ReactDom.render(<App />, document.getElementById("root"));
