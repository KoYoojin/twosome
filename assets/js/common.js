$(document).ready(function (){
	var $header = $('#header');
	var $gnb=$("#gnb > ul");
	$gnb.find(" li ul").hide();	//depth2의 ul 태그는 자동으로 숨기고 시작

	//1)depth1 <a>에 마우스 진입:mouseenter, focus
	$gnb.find("> li > a").on("mouseenter focus",function  () {
		//초기화
		$gnb.find("> li.on").removeClass("on").children("ul").hide();
		//$header.removeClass('active');

		//현재설정
		$(this).parent().has('ul').closest($header).addClass('active');	//#header 너비의 100% 흰색바 생성을 위한 클래스명 추가
		$(this).next().show().parent().addClass("on");
	});

	//2)nav에서 마우스 떠나기:mouseleave
	$gnb.on("mouseleave",function  () {
		$header.removeClass('active');
		$gnb.find("> li.on").removeClass("on").children("ul").hide();
	});

	//3)blur: shift탭을 눌러서 gnb에서 포커스가 나가던지, 탭을 눌러 gnb에서 포커스가 나가던지, 
	$("#gnb a:first , #gnb a:last").on("blur",function  () {
		setTimeout(function  () {
			if ( !$("#gnb a").is(":focus") ) {
				$gnb.mouseleave();
			}1
		}, 10);
	});

	// top 이동 - 브라우저에 scroll이 있을 때만 동작 가능
	// $(window).on("scroll",function  () {
	// 	$(".top_btn").on("click",function  () {
	// 		$("html, body").stop().animate({scrollTop:0});
	// 		return false;
	// 	});
	// });

	//top 이동 - scroll 없어도 동작 가능
	$('.btn_top').on('click', function () {
		fullpage_api.moveTo(1); //본문 1번의 위치로 자동 이동시키기
		$('.logo a').focus(); // 접근성을 위하여 문서의 처음(.logo a)으로 focus 강제 이동
	});
});