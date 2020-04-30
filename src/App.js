import React, { useEffect, useState } from 'react';
import TableList from './components/TableList';
import './App.css';

function App () {
	const [users, setUsers] = useState([]);
	const [userJSON, setUserJSON] = useState("");

	useEffect(() => {
		async function fetchData() {
			await fetch('https://jsonplaceholder.typicode.com/users')
				.then(response => response.json())
				.then(data => setUsers(data));
		}

		fetchData();
	}, [setUsers, setUserJSON])

	function handleTextArea(event) {
		setUserJSON(event.target.value);
	}

	function handleSendJSON() {
		try {
			setUsers(JSON.parse(userJSON));
		} catch (e) {
			alert('JSON NOT VALID');
			return false;
		}
	}

	return (
		<>
			<div className="json-input">
				<textarea
					onChange={handleTextArea}
					value={userJSON}
				></textarea>
				<button onClick={handleSendJSON}>Send</button>
			</div>
			<TableList dataList={users}/>
		</>
	);
}

export default App;
