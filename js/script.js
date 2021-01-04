$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 300){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    })
})


// Up button 
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 1000){
            $('#upBtn').fadeIn();
        }else{
            $('#upBtn').fadeOut();
        }
    })

    $('#upBtn').click(function(){
        $('html, body').animate({scrollTop: 0}, 1000);
    })
})

// preloader 
$(window).on("load", function(){
    $('.loader-container').fadeOut(1000);
})
