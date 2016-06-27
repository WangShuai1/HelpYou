var tplHome=require('../templates/home.string');

SPA.defineView('home',{
	html:tplHome,
	
	plugins:["delegated"],
	
	bindEvents:{
		show:function(){
			var swiper=new Swiper('.swiper-container',{
				loop:true,
				autoplay:2000
			});
		}
	},
	
	bindActions:{
		"more":function(e,data){
			SPA.open('more');
		}
	}
	
	
});
