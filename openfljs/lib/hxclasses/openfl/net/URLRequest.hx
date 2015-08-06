package openfl.net;

extern class URLRequest {
	var contentType : String;
	var data : Dynamic;
	var method : String;
	var requestHeaders : Array<URLRequestHeader>;
	var url : String;
	var userAgent : String;
	function new(?inURL : String) : Void;
	function formatRequestHeaders() : Array<URLRequestHeader>;
}
