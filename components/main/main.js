(function() {
	var li = document.getElementsByTagName("li");
	var contentLi = Array.prototype.slice.apply(li,[5,10]);

	//个人简绍轮播代码
	var counter = 0;
	var showInTurn = function() {
		contentLi.forEach(function(item,length,array) {
			if (length === counter) {
				item.style.display = "block";
			} else {
				item.style.display = "none";
			};
		});
		counter++;
		if (counter === 5) {
			counter = 0;
		};
		setTimeout(showInTurn,5000);
	};
	setTimeout(showInTurn,5000);


	//鼠标移入头像，介绍切换
	for (var i=0; i<5; i++) {

		EventUtil.addHandler(li[i],"mouseenter",function(num) {
			var handler = function() {
				contentLi.forEach(function(item,length,array) {
					if (length === num) {
						item.style.display = "block";
					} else {
						item.style.display = "none";
					};
				});
				counter = num;	//轮播计数器更新到新位置
			};
			return handler;	
		}(i));
	}
})();