$(function(){ 
//	获取页面的title-用于填写工单修改样式
var title_mi = document.title
var retop;
//	加载头部
	$.ajax({
		type:"get",
		async:false,
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
			 		if(title_mi == '填写工单'){
			 			listnav[2].style.color = '#29CC5F'
			 		}
			 		
			 	})
			 	retop = $('#retuTop')
			 	
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
//	 返回顶部
	 $(window).on('scroll', function() {
	   if ($(this).scrollTop() > 100) { /* 返回顶部按钮将在用户向下滚动100像素后出现 */
			   retop.fadeIn();
	   } else {
			   retop.fadeOut();
	   }
	 });
 	  retop.on('click', function(e) {
		$("html, body").animate({scrollTop: 0}, 500);
	 });
		 	
});