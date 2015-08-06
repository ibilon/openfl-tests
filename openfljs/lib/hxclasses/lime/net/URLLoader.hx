package lime.net;

extern class URLLoader {
	var bytesLoaded : Int;
	var bytesTotal : Int;
	var data : Dynamic;
	var dataFormat(default,set) : URLLoaderDataFormat;
	var onComplete : lime.app.Event<URLLoader -> Void>;
	var onHTTPStatus : lime.app.Event<URLLoader -> Int -> Void>;
	var onIOError : lime.app.Event<URLLoader -> String -> Void>;
	var onOpen : lime.app.Event<URLLoader -> Void>;
	var onProgress : lime.app.Event<URLLoader -> Int -> Int -> Void>;
	var onSecurityError : lime.app.Event<URLLoader -> String -> Void>;
	function new(?request : URLRequest) : Void;
	function close() : Void;
	function load(request : URLRequest) : Void;
}
