(this.webpackJsonppiratetube=this.webpackJsonppiratetube||[]).push([[0],{13:function(e,t,a){e.exports=a(33)},18:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),c=a.n(r),o=(a(18),a(2)),s=a(3),l=a(5),u=a(4),d=a(6),m=a(11),v=a.n(m),h=a(12),p=a.n(h),b=function(e){var t=e.video,a=e.onVideoSelect,n=t.snippet.thumbnails.default.url;return i.a.createElement("li",{onClick:function(){return a(t)},className:"list-group-item"},i.a.createElement("div",{className:"video-list media"},i.a.createElement("div",{className:"media-left"},i.a.createElement("img",{className:"media-object",src:n})),i.a.createElement("div",{className:"media-body"},i.a.createElement("div",{className:"media-heading"},t.snippet.title))))},f=function(e){var t=e.videos.map((function(t){return i.a.createElement(b,{onVideoSelect:e.onVideoSelect,key:t.etag,video:t})}));return i.a.createElement("ul",{className:"col-md-4 list-group"},t)},E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={term:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"search-bar"},i.a.createElement("input",{value:this.state.term,onChange:function(t){return e.onInputChange(t.target.value)}}))}},{key:"onInputChange",value:function(e){this.setState({term:e}),this.props.onNewSearch(this.state.term)}}]),t}(n.Component),S=function(e){var t=e.video;if(!t)return i.a.createElement("div",null,"Loading...");var a=t.id.videoId,n="https://www.youtube.com/embed/".concat(a);return i.a.createElement("div",{className:"video-detail col-md-8"},i.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},i.a.createElement("iframe",{className:"embed-responsive-item",src:n})),i.a.createElement("div",{className:"details"},i.a.createElement("div",null,t.snippet.title),i.a.createElement("div",null,t.snippet.description)))},w=(a(32),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={videos:[],selectedVideo:null,searchTerm:"culruv"},a.videoSearch("culruv"),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"videoSearch",value:function(e){var t=this;p()({key:"AIzaSyCcBRWMSoujk3UvlbYwUoIJ7Dty1kAah4Q",term:e},(function(e){t.setState({videos:e,selectedVideo:e[0]})}))}},{key:"render",value:function(){var e=this,t=v.a.debounce((function(t){e.videoSearch(t)}),300);return i.a.createElement("div",null,i.a.createElement(E,{onNewSearch:t}),i.a.createElement(S,{video:this.state.selectedVideo}),i.a.createElement(f,{onVideoSelect:function(t){return e.setState({selectedVideo:t})},videos:this.state.videos}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(w,null),document.querySelector(".container")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.27b68e8e.chunk.js.map