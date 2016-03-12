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