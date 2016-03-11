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
    var fsDiv = document.getElementById("first_screen"),
        arow = document.getElementById("arow_down"),

        /*获取页面视区高宽，
         *用document.documentElement.clientHeight而不用window.innerHeight是为了兼容大部分浏览器
         */
        h = document.documentElement.clientHeight,                            
        w = document.documentElement.clientWidth;

    /*h和w均为纯数值，所以要加单位*/    
    fsDiv.style.height = h + "px";
    fsDiv.style.width = w + "px";

    // 设置宽高之后才定义背景，
    // 因为当一个元素有了大小之后，其背景属性定义才有效
    fsDiv.style.backgroundColor = "#009999";

    //为向下箭头绑定事件
    EventUtil.addHandler(arow,"click",function(){
        var timerId = setInterval(function() {
            window.scrollBy(0,20);
            if (document.body.scrollTop > h) {
                clearInterval(timerId);
            };
        },5)
    });
})();


