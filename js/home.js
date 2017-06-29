$(function () {
    var load = function (url) {
        $.get(url).done(function (data) {
            $("#content").html(data);
        })
    };

    $(document).on('click', 'a', function (e) {
        e.preventDefault();

        var $this = $(this),
            url = $this.attr("href"),
            title = $this.text();

        history.pushState({
            url: url,
            title: title
        }, title, url);

        document.title = title;

        load(url);
    });

    $(window).on('popstate', function (e) {
        var state = e.originalEvent.state;
        if (state !== null) {
            document.title = state.title;
            load(state.url);
        } else {
            document.title = 'World Regions';
            $("#content").empty();
        }
    });
});



// jQuery
$(window).on('popstate', function (e) {
    var state = e.originalEvent.state;
    if (state !== null) {
        //load content with ajax
    }
});

// Vanilla javascript
window.addEventListener('popstate', function (e) {
    var state = e.state;
    if (state !== null) {
        //load content with ajax
    }
});

history.pushState(null, null, 'new-page.html');
// or
history.pushState({url: 'new-page.html'}, 'New Page');
// or
history.pushState({url: 'new-page.html', page: 2}, 'New Page', 'new-page.html');
