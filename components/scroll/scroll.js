/**
 * Created by rccoder on 2016/3/10.
 */
(function(et) {
    addLoadListener(_scroll);

    function _scroll() {
        var scroll = document.getElementById("scroll"),
            win = window;

        var MAX_SCROLL_VALUE = 200;
        et.addHandler(win, 'scroll', function() {
            if(win.pageYOffset > MAX_SCROLL_VALUE) {
                scroll.style.display = "block";
            } else {
                scroll.style.display = "none";
            }
        })

        et.addHandler(scroll, 'click', function() {

            var timer = setInterval(function() {
                win.scrollBy(0, -70);
                if(document.body.scrollTop == 0) {
                    clearTimeout(timer)
                }
            }, 10)
        });
    };

})(EventUtil);
