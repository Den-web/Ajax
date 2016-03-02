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

// �������� ������ � url � �������� cb - ������� c ������� ������� 
function getUrl(http://javascript.ru/forum/url, cb) { 
	var xmlhttp = getXmlHttp();
	// IE �������� XMLHttpRequest �������, ��� ��� ��������� ��������� �������� � URL
	// (���� ����� �������� ����������� ����������� �� �������)
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
