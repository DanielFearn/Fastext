class LoadView extends React.Component{load(){fastext.text=$('.loadContainer textarea').val(),console.log(fastext.text),fastext.process(),fastext.saveFastextState(),this.props.appState.set({view:'home'})}render(){return h('div',{className:'container'},h(Header,null),h(NavMenu,{appState:this.props.appState}),h('div',{className:'loadContainer'},h('textarea',{placeholder:'Paste your text here'}),h('img',{src:'images/pen.png'}),h('div',{id:'loadBtn',className:'btn-hover',onClick:this.load.bind(this)},'LOAD')))}}

// copyright © 2018 Daniel Fearn