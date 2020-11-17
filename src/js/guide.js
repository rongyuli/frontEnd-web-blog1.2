let sectionsArr = []
let i = 0
$().ready(function () {
    token = location.hash.slice(1) - 1
    tokenEl = $('.nav_btn:eq(' + token + ')')
    for (item of $('section')) {
        sectionsArr.push($(item).offset())
    }
    for (item of $('h3')) {
        $(item).css({ top: sectionsArr[i].top - 115, left: sectionsArr[i].left - 150 })
        i++
    }

    $('#time>*:odd').css({ color: '#081272' })
    $('section:even').css({ background: 'rgb(241, 241, 241)' })

    $('section:even').hover(
        function () {
            $(this).css({
                background: 'rgb(251, 251, 251)',
                'box-shadow': '4px 4px 4px rgba(128, 128, 128, 0.7)',
            })
        },
        function () {
            $(this).css({ background: 'rgb(241, 241, 241)', 'box-shadow': 'none' })
        }
    )
    $('section:odd').hover(
        function () {
            $(this).css({
                background: 'rgb(251, 251, 251)',
                'box-shadow': '4px 4px 4px rgba(128, 128, 128, 0.7)',
            })
        },
        function () {
            $(this).css({ background: 'rgb(221, 221, 221)', 'box-shadow': 'none' })
        }
    )

    window.onresize = function () {
        $('#bar').css({ left: tokenEl.offset().left })
        console.log(tokenEl.offset().left)
        i = 0
        sectionsArr.splice(0, sectionsArr.length)
        for (item of $('section')) {
            sectionsArr.push($(item).offset())
        }
        for (item of $('h3')) {
            $(item).css({ top: sectionsArr[i].top - 115, left: sectionsArr[i].left - 150 })
            i++
        }
        i = 0
    }
})
