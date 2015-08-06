package openfl.events;

extern class IOErrorEvent extends ErrorEvent {
	function new(type : String, bubbles : Bool = false, cancelable : Bool = false, ?text : String, id : Int = 0) : Void;
	static var IO_ERROR : String;
}
