$(function(){ 
//	加载头部
	$.ajax({
		type:"get",
		url:"../home/repeat/html/header.html",
		success:function(data){
			$('.first_div').before(data)
				var pathname ='../..' + window.location.pathname
			    var listnav = Array.from($('#collapsibleNavbar ul li a'))
			 	listnav.forEach(function(value,index){
					//console.log(listnav[index].href)
			 		console.log(listnav[index].getAttribute('href'))
			 		if(listnav[index].getAttribute('href') === pathname){
						listnav[index].style.color = '#29CC5F'
			 		}
			 	})
		}
	});
//加载尾部
	$.ajax({
		type:"get",
		url:"../home/repeat/html/footer.html",
		success:function(data){
			$('.last_div').after(data)
		}
	});
	

 
  
});