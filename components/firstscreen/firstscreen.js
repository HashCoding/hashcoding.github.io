var EventUtil = {

    //添加事件
    addHandler:function (element,type,handler) {
        if (element.addEventListener) {
            element.addEventListener(type,handler,false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type,handler);
        } else {
            element["on"+type] = handler;
        }
    },

    //移除事件
    removeHandler:function (element,type,handler) {
        if (element.removeEventHandler) {
            element.removeEventHandler(type,handler,false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type,handler);
        } else {
            element["on" + type] = null;
        }
    }
};


(function() {
    var arow = document.getElementById("arow_down");

        //为向下箭头绑定事件
    EventUtil.addHandler(arow,"click",function(){
        var h = document.documentElement.clientHeight;  //获取页面视区高宽，用document.documentElement.clientHeight而不用window.innerHeight是为了兼容大部分浏览器
            timerId = setInterval(function() {
            window.scrollBy(0,20);
            if (document.body.scrollTop > h) {
                clearInterval(timerId);
            };
        },5)
    });
})();


