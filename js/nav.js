$().ready(function () {
    window.onresize = () => $('#bar').css({ left: tokenEl.offset().left })
    $('.nav_btn').mouseover(function () {
        $('#bar').css({ display: 'block', left: $(this).offset().left })
        $(this).siblings().css({ color: '#081272' })
        $(this).css({ color: '#ffba00' })
    })
    let tokenEl = $('.nav_btn:eq(' + hash + ')')
    tokenEl.css({ color: '#ffba00' })
    $('#bar').css({ display: 'block', left: tokenEl.offset().left })

    $('#submitBtn').click(function () {
        $('#bar').css({ left: tokenEl.offset().left })
    })

    $('nav').mouseout(function () {
        $('#bar').css({ display: 'block', left: tokenEl.offset().left })
        tokenEl.siblings().css({ color: '#081272' })
        tokenEl.css({ color: '#ffba00' })
    })

    $('#nav li').mouseout(function (event) {
        event.stopPropagation()
    })
})
