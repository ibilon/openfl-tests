package openfl.events;

extern class MouseEvent extends Event {
	var altKey : Bool;
	var buttonDown : Bool;
	var clickCount : Int;
	var commandKey : Bool;
	var ctrlKey : Bool;
	var delta : Int;
	var localX : Float;
	var localY : Float;
	var relatedObject : openfl.display.InteractiveObject;
	var shiftKey : Bool;
	var stageX : Float;
	var stageY : Float;
	function new(type : String, bubbles : Bool = false, cancelable : Bool = false, localX : Float = 0, localY : Float = 0, ?relatedObject : openfl.display.InteractiveObject, ctrlKey : Bool = false, altKey : Bool = false, shiftKey : Bool = false, buttonDown : Bool = false, delta : Int = 0, commandKey : Bool = false, clickCount : Int = 0) : Void;
	function updateAfterEvent() : Void;
	static var CLICK : String;
	static var DOUBLE_CLICK : String;
	static var MIDDLE_CLICK : String;
	static var MIDDLE_MOUSE_DOWN : String;
	static var MIDDLE_MOUSE_UP : String;
	static var MOUSE_DOWN : String;
	static var MOUSE_MOVE : String;
	static var MOUSE_OUT : String;
	static var MOUSE_OVER : String;
	static var MOUSE_UP : String;
	static var MOUSE_WHEEL : String;
	static var RIGHT_CLICK : String;
	static var RIGHT_MOUSE_DOWN : String;
	static var RIGHT_MOUSE_UP : String;
	static var ROLL_OUT : String;
	static var ROLL_OVER : String;
	@:noCompletion static function __create(type : String, button : Int, stageX : Float, stageY : Float, local : openfl.geom.Point, target : openfl.display.InteractiveObject, delta : Int = 0) : MouseEvent;
}
