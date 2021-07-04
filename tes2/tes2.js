var count = 1
$('#play').click(function (e) { 
    e.preventDefault();
    if (count) {
        count = 0
        $(".inner-square").css("-webkit-animation-play-state", "running");
        $('.square').css('width', '300px');
        $('.square').css('height', '300px');
    }else{
        count = 1
        $(".inner-square").css("-webkit-animation-play-state", "paused");
        $('.square').css('border-radius', '9px');
        $('.square').css('width', '0');
        $('.square').css('height', '0');

    }
    setTimeout(()=>{

    }, 1000)
    
});