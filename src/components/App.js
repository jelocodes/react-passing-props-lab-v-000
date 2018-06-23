import React from 'react';

import FruitBasket from './FruitBasket';

// const App = () => <FruitBasket />;

// export default App;

export default class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			filters: [],
			fruit: [],
			currentFilter: null
		}
	} 

  	handleFilterChange = event => {
    	console.log('new filter: ', event.target.value);
    	this.setState({ currentFilter: event.target.value });
  	}

  	fetchFilters = () => {
    	fetch('/api/fruit_types')
      		.then(response => response.json())
      		.then(filters => this.setState({ filters }));
      	fetch('/api/fruit')
      		.then(response => response.json())
      		.then(fruit => this.setState({ fruit }));
  	}

  	componentWillMount() {
    	this.fetchFilters();
  	}

  	componentDidMount() {
    	fetch('/api/fruit')
      		.then(response => response.json())
      		.then(fruit => this.setState({ fruit }));
  	}

  	render(){
  		const list = !this.state.currentFilter || this.state.currentFilter === 'all' ? this.state.fruit : this.state.fruit.filter(i => i.fruit_type === this.state.currentFilter);

  		return (
  			<FruitBasket fetchFilters = {this.fetchFilters} filters={this.state.filters} list={list} currentFilter={this.state.currentFilter} handleFilterChange={this.handleFilterChange} />
  		)
  	}
}
