package openfl.events;

extern class AsyncErrorEvent extends ErrorEvent {
	var error : haxe.io.Error;
	function new(type : String, bubbles : Bool = false, cancelable : Bool = false, ?text : String, ?error : haxe.io.Error) : Void;
	static var ASYNC_ERROR : String;
}
