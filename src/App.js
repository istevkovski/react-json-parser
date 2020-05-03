import React from 'react';
import TableList from './components/TableList';

import './App.css';


class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { data: [] }

		this.customJSONRef = React.createRef();
	}

	componentDidMount() { this.fetchData() };

	async fetchData() {
		await fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => this.setState({ data: data }));
	};

	handleSendJSON = () => {
		try {
			this.setState({ data: JSON.parse(this.customJSONRef.current.value)})
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
				<TableList dataList={this.state.data}/>
			</>
		)
	};
}

export default App;
