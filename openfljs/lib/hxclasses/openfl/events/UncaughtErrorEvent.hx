package openfl.events;

extern class UncaughtErrorEvent extends ErrorEvent {
	var error : Dynamic;
	function new(type : String, bubbles : Bool = false, cancelable : Bool = false, ?error : Dynamic) : Void;
	static var UNCAUGHT_ERROR : String;
}
