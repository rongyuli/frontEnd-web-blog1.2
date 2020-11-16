$().ready(function(){
    $('section').hover(function(){
        $(this).css({'background': 'white','box-shadow': '6px 6px 6px rgba(128, 128, 128, 0.8)'})
        $('main').css({'background': 'rgb(235,235,235)'})
    },function(){
        $(this).css({'background': 'inherit','box-shadow': '2px 2px 2px rgba(128, 128, 128, 0.459)'})
        $('main').css({'background': 'rgb(247,247,247)'})
    })
})