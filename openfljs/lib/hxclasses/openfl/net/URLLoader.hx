package openfl.net;

extern class URLLoader extends openfl.events.EventDispatcher {
	var bytesLoaded : Int;
	var bytesTotal : Int;
	var data : Dynamic;
	var dataFormat(default,set) : URLLoaderDataFormat;
	function new(?request : URLRequest) : Void;
	function close() : Void;
	function load(request : URLRequest) : Void;
}
