let headers = $request.headers;
if (headers['Referer'].startsWith( 'https://pre-emas.console.aliyun.com/')){
	let urlObj = new URL($request.url);
    	urlObj.hostname = '59.82.29.3';
	let url = urlObj.toString();
	$done({url,headers});
}else {
	$done({headers});
}
