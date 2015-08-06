package openfl.events;

extern class HTTPStatusEvent extends Event {
	var responseHeaders : Array<Dynamic>;
	var responseURL : String;
	var status(default,null) : Int;
	function new(type : String, bubbles : Bool = false, cancelable : Bool = false, status : Int = 0) : Void;
	static var HTTP_RESPONSE_STATUS : String;
	static var HTTP_STATUS : String;
}
