package openfl.events;

extern class JoystickEvent extends Event {
	var axis : Array<Float>;
	var device : Int;
	var id : Int;
	var x : Float;
	var y : Float;
	var z : Float;
	function new(type : String, bubbles : Bool = false, cancelable : Bool = false, device : Int = 0, id : Int = 0, x : Float = 0, y : Float = 0, z : Float = 0) : Void;
	static var AXIS_MOVE(inline,never) : String;
	static var BALL_MOVE(inline,never) : String;
	static var BUTTON_DOWN(inline,never) : String;
	static var BUTTON_UP(inline,never) : String;
	static var DEVICE_ADDED(inline,never) : String;
	static var DEVICE_REMOVED(inline,never) : String;
	static var HAT_MOVE(inline,never) : String;
}
