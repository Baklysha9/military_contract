$(document).ready(function(){
	$("#navbarNav").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

$("#book").on("click", function (event) {
    $("#quest").append('<embed type="application/x-shockwave-flash" src="https://xn--80ahclcogc6ci4h.xn--90anlfbebar6i.xn--p1ai:443/images/Contract100.swf" width="1000" height="710" id="sotester" name="sotester" bgcolor="#FFFFFF" quality="high" allownetworking="all" allowscriptaccess="always" allowfullscreen="true" scale="noscale" wmode="transparent" flashvars="lwImg=resources/zastavka.jpg&amp;lwBgColor=255,255,255,255&amp;lwBarBgColor=255,255,255,255&amp;lwBarColor=255,0,51,255&amp;lwBarBounds=160,540,480,8&amp;lwlocation=0&amp;lwShowLoadingPercent=true&amp;lwTextColor=255,0,0,0&amp;iniFile=config.bin&amp;progressType=0&amp;swfFile=&amp;href=https://xn--80ahclcogc6ci4h.xn--90anlfbebar6i.xn--p1ai/multimedia/infographics/parad/contract100.htm?">');
});

$('.mainHead').animated('bounceInLeft', 'fadeOut');
$('.content').animated('bounceInRight', 'fadeOut');
$('.jack').animated('zoomIn', 'fadeOut');