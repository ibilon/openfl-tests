package openfl.events;

extern class ErrorEvent extends TextEvent {
	var errorID(default,null) : Int;
	function new(type : String, bubbles : Bool = false, cancelable : Bool = false, ?text : String, id : Int = 0) : Void;
	static var ERROR : String;
}
