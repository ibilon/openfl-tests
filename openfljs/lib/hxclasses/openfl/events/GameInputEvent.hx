package openfl.events;

extern class GameInputEvent extends Event {
	var device(default,null) : openfl.ui.GameInputDevice;
	function new(type : String, bubbles : Bool = false, cancelable : Bool = false, ?device : openfl.ui.GameInputDevice) : Void;
	static var DEVICE_ADDED : String;
	static var DEVICE_REMOVED : String;
	static var DEVICE_UNUSABLE : String;
}
