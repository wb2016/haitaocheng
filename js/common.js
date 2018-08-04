function bufferMove(obj, target, ratio = 8) {
	return new Promise(function (resolve, reject) {
		// 清除定时器
		clearInterval(obj.timer);
		// 开启新的定时器
		obj.timer = setInterval(function () {
			// 假设所有的属性均已运动完毕
			var btn = true;
			// 遍历对象
			for(var attr in target) {
				// 获取属性的当前值
				var cur = 0;
				if(attr === 'opacity') {
					cur = getStyle(obj, 'opacity') * 100;
				} else {
					cur = parseFloat( getStyle(obj, attr) ) || 0;
				}
				// 计算速度
				var speed = (target[attr] - cur) / ratio;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				// 计算下一次的值
				var next = cur + speed;
				// 赋值
				if(attr === 'opacity') {
					obj.style.opacity = next / 100;
					obj.style.filter  = 'alpha(opacity=' + next + ')';
				} else {
					obj.style[attr] = next + 'px';
				}
				if(next !== target[attr]) {
					btn = false;
				}
			}
			if(btn === true) {
				clearInterval(obj.timer);
				// 执行回调函数
				// fn && fn();
				resolve();
			}
		}, 50);
	});
}


/*
	获取元素样式值
*/
function getStyle(obj, attr) {
	if(obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}