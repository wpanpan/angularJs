(function(window,document,undefined){
	'use strict'
	var jsonp = function(url,data,callback){
		//挂在回调函数
		var cbFuncName = 'my_json_cb_'+Math.random.toString().replace('.','');
		window[cbFuncName] = callback;
		//1.处理参数及回调函数
		var queryString = url.indexOf('?')==-1?'?':'&';
		for(var key in data){
			queryString += key + '=' + data[key] + '&';
		}
		
		queryString += 'cb=' + cbFuncName;
		//2.创建一个script标签
		var scriptElement = document.createElement('script');
		scriptElement.src = url + queryString;
		document.body.appendChild(scriptElement);
		//页面会自动发送请求
	}
	window.$jsonp = jsonp;
})(window,document);