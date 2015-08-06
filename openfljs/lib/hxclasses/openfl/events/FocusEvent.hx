package openfl.events;

extern class FocusEvent extends Event {
	var keyCode : Int;
	var relatedObject : openfl.display.InteractiveObject;
	var shiftKey : Bool;
	function new(type : String, bubbles : Bool = false, cancelable : Bool = false, ?relatedObject : openfl.display.InteractiveObject, shiftKey : Bool = false, keyCode : Int = 0) : Void;
	static var FOCUS_IN : String;
	static var FOCUS_OUT : String;
	static var KEY_FOCUS_CHANGE : String;
	static var MOUSE_FOCUS_CHANGE : String;
}
