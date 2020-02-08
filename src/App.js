import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';

import VideoList from './components/video_list';
import SearchBar from './components/search_box';
import VideoDetail from './components/video_detail';
import './style/style.css';
const API_KEY = 'AIzaSyCcBRWMSoujk3UvlbYwUoIJ7Dty1kAah4Q';

class App extends Component{
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null,
			searchTerm: 'culruv'
		};

		this.videoSearch('hack36');
	}

	videoSearch(term) {
		YTsearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
		return (
			<div>
				<div>
					<SearchBar onNewSearch={videoSearch}/>
					<VideoDetail video={this.state.selectedVideo}/>
					<VideoList 
						onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
						videos={this.state.videos}/>
				</div>
				<div className="footer">
					Developed by <a href="https://github.com/pirateksh/">Kshitiz Srivastava</a>
				</div>
			</div>
		);
	}
}

export default App;