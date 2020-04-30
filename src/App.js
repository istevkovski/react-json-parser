import React, { useEffect, useState } from 'react';
import TableList from './components/TableList';
import './App.css';

function App () {
	const [users, setUsers] = useState([]);
	const customJSONRef = React.useRef();

	useEffect(() => {
		async function fetchData() {
			await fetch('https://jsonplaceholder.typicode.com/users')
				.then(response => response.json())
				.then(data => setUsers(data));
		}

		fetchData();
	}, [setUsers])

	function handleSendJSON(e) {

		try {
			setUsers(JSON.parse(customJSONRef.current.value));
		} catch (e) {
			alert('JSON NOT VALID');
			return false;
		}
	}

	return (
		<>
			<div className="json-input">
				<textarea
					ref={customJSONRef}
				></textarea>
				<button onClick={handleSendJSON}>Send</button>
			</div>
			<TableList dataList={users}/>
		</>
	);
}

export default App;
