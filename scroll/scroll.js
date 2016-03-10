/**
 * Created by rccoder on 2016/3/10.
 */
window.onload = function() {
    (function(et) {

        var scroll = document.getElementById("scroll");

        et.addHandler(scroll, 'click', function() {

            var timer = setInterval(function() {
                window.scrollBy(0, -70);
                if(document.body.scrollTop == 0) {
                    clearTimeout(timer)
                }
            }, 10)
        });

    })(EventUtil);
}