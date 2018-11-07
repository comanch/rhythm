$(document).ready(function(){

    // hide scroll to top 
    
    var height = $('#home').innerHeight()/2;

    $(document).on('scroll', function(){
       if(document.documentElement.scrollTop > height) {
        $('#goto-top').addClass('show');
       }
       else{
        $('#goto-top').removeClass('show');
       }
    });

    $('.scrollable').on('click', function(){
        var to = $($(this).attr('href')).offset().top;
        scrollTo(document.documentElement, to, 1000);
        return false;
    });


    function scrollTo(element, to, duration) {
        var start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;
            
        var animateScroll = function(){        
            currentTime += increment;
            var val = Math.easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if(currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }
    
    Math.easeInOutQuad = function (t, b, c, d) {
      t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    };
 
});
