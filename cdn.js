let headers = $request.headers;
if (headers['referer'] == 'https://pre-emas.console.aliyun.com/'){
	let urlObj = new URL($request.url);
    	urlObj.hostname = '59.82.29.3';
	$request.url = urlObj.toString();
	$done({headers});
}else {
	$done({headers});
}
