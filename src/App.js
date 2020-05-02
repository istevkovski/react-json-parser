import React from 'react';
import TableList from './components/TableList';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			users: []
		}

		this.customJSONRef = React.createRef();
	}

	componentDidMount() {
		this.fetchData();
	};

	async fetchData() {
		await fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => this.setState({ users: data }));
	};

	handleSendJSON = () => {
		try {
			this.setState({ users: JSON.parse(this.customJSONRef.current.value)});
		} catch {
			alert('JSON NOT VALID');
			return false;
		}
	}

	render() {
		return (
			<>
				<div className="json-input">
					<textarea
						ref={this.customJSONRef}
						placeholder="Enter custom JSON here"
					></textarea>
					<button onClick={this.handleSendJSON}>Send</button>
				</div>
				<TableList dataList={this.state.users}/>
			</>
		)
	};
}

export default App;
