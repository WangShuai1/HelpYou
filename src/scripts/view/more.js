var tplMore=require('../templates/more.string');

SPA.defineView('more',{
	html:tplMore,
	plugins:["delegated"],
	
	bindActions:{
		"back":function(e,data){
			this.hide();
		}
	}
	
});