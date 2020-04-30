import React, { useEffect, useState } from 'react';
import TableList from './components/TableList';
import './App.css';
import data from './data/example.json';

function App () {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		async function fetchData() {
			await fetch('https://jsonplaceholder.typicode.com/users')
				.then(response => response.json())
				.then(data => setUsers(data));
		}

		fetchData();
	}, [])

	return (
		<>
			<TableList dataList={users}/>
		</>
	);
}

export default App;
