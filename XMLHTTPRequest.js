function getXmlHttp(){
	try {
		return new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
		try {
			return new ActiveXObject("Microsoft.XMLHTTP");
		} catch (ee) {
		}
	}
	if (typeof XMLHttpRequest!='undefined') {
		return new XMLHttpRequest();
	}
}

// Получить данные с url и вызывать cb - коллбэк c ответом сервера 
function getUrl(http://javascript.ru/forum/url, cb) { 
	var xmlhttp = getXmlHttp();
	// IE кэширует XMLHttpRequest запросы, так что добавляем случайный параметр к URL
	// (хотя можно обойтись правильными заголовками на сервере)
	xmlhttp.open("GET", url+'?r='+Math.random());
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4) {
			cb(
			xmlhttp.status, 
			xmlhttp.getAllResponseHeaders(), 
			xmlhttp.responseText
			);
		}
	}
	xmlhttp.send(null);
}
