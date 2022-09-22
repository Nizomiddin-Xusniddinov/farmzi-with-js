AOS.init();
$(document).ready(function() {
    
    $('.rdmore').click(function (){
        $(this).parent().find('.none').slideToggle();
    });
    var $link = $('header .navbars ul li a')
    $link.click(function(e) {
        e.preventDefault()
        $link.removeClass('.active')
        var id = $(this).addClass(".active").attr("href")
        var target = $(id).offset().top - 60
        $('html , body').animate({
            scrollTop: target
        }, 1000)
    })
    
    $(window).scroll(function() {
        var scrolls = $(this).scrollTop() // 700
        $link.each(function() {
            var selector = $(this).attr('href')
            var target = $(selector).offset().top - 100 /// 600
            if (scrolls >= target) {
                $link.removeClass('active')
                $(this).addClass('active')
            }
        })
    });
    let $header = $('header')
        let $nav = $('.navbars')
        var flag = false
        function fixed(){
            if(scrollY >= $header.innerHeight() && !flag){
                $nav.addClass('fixed-top').css('opacity' , 0).animate({
                    opacity : 1
                } ,1000)
                flag = true
            }else if(scrollY < $header.innerHeight() && flag){
                $nav.animate({
                    opacity : 0
                }, 1000 , function(){
                    $nav.removeClass('fixed-top').css('opacity' , 1)
                })
                flag = false
            }
        }
        $(window).on('scroll' , fixed)
        fixed()

});



// active addClass("active")