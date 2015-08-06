package openfl.events;

extern class KeyboardEvent extends Event {
	var altKey : Bool;
	var charCode : Int;
	var commandKey : Bool;
	var controlKey : Bool;
	var ctrlKey : Bool;
	var keyCode : Int;
	var keyLocation : openfl.ui.KeyLocation;
	var shiftKey : Bool;
	function new(type : String, bubbles : Bool = false, cancelable : Bool = false, charCodeValue : Int = 0, keyCodeValue : Int = 0, keyLocationValue : Null<openfl.ui.KeyLocation> = null, ctrlKeyValue : Bool = false, altKeyValue : Bool = false, shiftKeyValue : Bool = false, controlKeyValue : Bool = false, commandKeyValue : Bool = false) : Void;
	static var KEY_DOWN : String;
	static var KEY_UP : String;
}
