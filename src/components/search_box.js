import React, { Component } from 'react'

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		// alert(this.state.term);
		return (
			<div className="search-bar">
				<span>
				<button type="button" className="title btn btn-primary"><b>PirateTube</b></button>
				</span>
				<span>
				<input 
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
				</span>
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onNewSearch(this.state.term)
	}
}


export default SearchBar;