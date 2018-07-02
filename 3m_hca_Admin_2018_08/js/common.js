
$(document).ready(function () {

	/* login input button active */
	$('.idInput').on('change keyup',function(){
		var $cnts = $('.idInput').val();
		var $cntsLength = $cnts.length;
		if( $cntsLength > 0){
			$('.loginBox .btnLogin').addClass('active');
		} else {	
			$('.loginBox .btnLogin').removeClass('active');
		}
	});
	/* //login input button active */
	
	/* login Popup Close*/
	$(".loginPop .btnClose").click(function(){
		$(".loginPop").animate({"margin-top":"0px", "opacity":"0"}, 500);
	});
	/* //login Popup Close*/

	/* selectbox */
	$(document).ready(function() {
	  $('select').niceSelect();
	});
	/* //selectbox */

	/* textarea �ڵ����� ���� */
	autosize(document.querySelectorAll('textarea'));
	/* //textarea �ڵ����� ���� */

	/* input button active */
	$('.writeBox .inputArea').each(function(){
		var $cnts = $(this).val();
		var $cntsLength = $cnts.length;
		if( $cntsLength > 0){
			$(this).parent(".writeBox").addClass("active");
		} else {	
			$(this).parent(".writeBox").removeClass("active");
		}
	});
	$('.writeBox .inputArea').on('change keyup',function(){
		var $cnts = $(this).val();
		var $cntsLength = $cnts.length;
		if( $cntsLength > 0){
			$(this).parent(".writeBox").addClass("active");
		} else {	
			$(this).parent(".writeBox").removeClass("active");
		}
	});
	/* // input button active */


	/* attributeList */
	$('.attributeList li .writeBox').css("display","none");
	$(".attributeList li > a").click(function(){
		$('.attributeList li').removeClass("open");
		$('.attributeList li .writeBox').slideUp('fast');
		if(!$(this).next().is(":visible"))
		{
			$(this).parent().addClass("open");
			$(this).next().slideDown('fast');
		}
		return false;
	});
	/* //attributeList */


	/* layer Popup Close*/
	$(".layer .layerBtnArea a").click(function(){
		$(".dim").animate({"left":"100%", "opacity":"0"}, 300);
		return false;
	});
	/* //layer Popup Close*/


	/* supur user question */
	$(".superUser li a.question").click(function(){
		$(this).toggleClass("active");
		$(this).siblings("div").toggle();
		return false;
	});
	/* //supur user question */


	/* tag */
	$(function() {
		$('.tagArea .txtInfo').TagTagger();
	});
	/* tag */

	/* survey */
	$(".surveyList ul li a").click(function(){
		$(this).toggleClass("on");
		return false;
	});

	/*
	$(".surveyList ul.depth1 > li > a").click(function(){
		$(".surveyList ul.depth1 > li ul a").removeClass("on");
		return false;
	});
	*/

	$(".surveyArea .btnExpand").click(function(){
		$(".surveyList ul li a").addClass("on");
		return false;
	});

	$(".surveyArea .btnCollapse").click(function(){
		$(".surveyList ul li a").removeClass("on");
		return false;
	});
	/* survey */
    
    
    
    
    /* **** ���������� �߰��� ��ũ��Ʈ *** */
    
    /* 0911 | �˾� �ݴ� �Լ� */
    function ClosePopup(){
		$(".dim").animate({"left":"100%", "opacity":"0"}, 300);
		return false;
	}
    
    /* 0911 | ESCŰ�� ���� �˾� �ݱ� */
    $(document).on("keyup",function(evt){
		var keyCode = evt.which;
		if( keyCode == 27 ){
			ClosePopup();
		}
		
	});
    /* 0911 | �˾� �ٱ� ���� Ŭ�� �� �˾� �ݱ� */
    $(".dim").on("click",function(){
		if($(".dim").is(":visible")){
			ClosePopup();
		}
	});
    
    /* 0911 | �˾� ���̾� Ŭ�� �� propagation ���� */
	$(".dim .layer").on("click",function(evt){
		evt.stopPropagation();
	});
    
    /* 1013 | �������������� ��Ʈ ������ focus �� ���� ��ȭ*/
    $(".homeCont .mainBord .noDataTxt").on('change keyup focus',function(){
        $(this).addClass("active");
	});
    $(".homeCont .mainBord .noDataTxt").on('blur',function(){	
        $(this).removeClass("active");
	});
    
    /* 1013 | �������������� cateList�� hover �� ���� ���̾� �߰� */
    $(".cateList li").each(function(index){
        $(this).prepend('<div class="layer"></div>')
    });
    
    /* 1013 | Product / Video ���������� �Է� �Ϸ�� �׸� written Ŭ���� �߰� */
    $('.infoArea .attributeList textarea').each(function(){
		var $cnts = $(this).val();
		var $cntsLength = $cnts.length;
		if( $cntsLength > 0){
			$(this).parents("li").addClass("written");
		} else {	
			$(this).parents("li").removeClass("written");
		}
	});
    $('.infoArea .attributeList textarea').on('change keyup', function(){
		var $cnts = $(this).val();
		var $cntsLength = $cnts.length;
		if( $cntsLength > 0){
			$(this).parents("li").addClass("written");
		} else {	
			$(this).parents("li").removeClass("written");
		}
	});

});
