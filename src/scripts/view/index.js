var tplIndex=require('../templates/index.string');

SPA.defineView('index',{
	html:tplIndex,
	
	
	plugins:["delegated"],
	modules:[{
		name:'content',
		views:['home','search','my'],
		defaultTag:'home',
		container:'.l-container'
	}],
	
	bindActions:{
		"switch.tabs":function(e,data){
			$(e.el).addClass('active').siblings().removeClass('active');
			this.modules.content.launch(data.tag);
//			console.log(data.tag)
		}
	}
	
});
