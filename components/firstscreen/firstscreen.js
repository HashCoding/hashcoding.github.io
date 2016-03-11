(function(et) {
    window.onload = function() {
        var arow = document.getElementById("arow_down"),
            h = document.documentElement.clientHeight;

        et.addHandler(arow,"click",function(){
            console.log(111)
            var timerId = setInterval(function() {
                window.scrollBy(0,20);
                if (document.body.scrollTop > h) {
                    clearInterval(timerId);
                };
            },5)
        });
    };

})(EventUtil);

