package openfl.events;

extern class TouchEvent extends Event {
	var altKey : Bool;
	var buttonDown : Bool;
	var commandKey : Bool;
	var ctrlKey : Bool;
	var delta : Int;
	var isPrimaryTouchPoint : Bool;
	var localX : Float;
	var localY : Float;
	var pressure : Float;
	var relatedObject : openfl.display.InteractiveObject;
	var shiftKey : Bool;
	var sizeX : Float;
	var sizeY : Float;
	var stageX : Float;
	var stageY : Float;
	var touchPointID : Int;
	function new(type : String, bubbles : Bool = false, cancelable : Bool = false, localX : Float = 0, localY : Float = 0, sizeX : Float = 0, sizeY : Float = 0, ?relatedObject : openfl.display.InteractiveObject, ctrlKey : Bool = false, altKey : Bool = false, shiftKey : Bool = false, buttonDown : Bool = false, delta : Int = 0, commandKey : Bool = false, clickCount : Int = 0) : Void;
	function updateAfterEvent() : Void;
	static var TOUCH_BEGIN(inline,never) : String;
	static var TOUCH_END(inline,never) : String;
	static var TOUCH_MOVE(inline,never) : String;
	static var TOUCH_OUT(inline,never) : String;
	static var TOUCH_OVER(inline,never) : String;
	static var TOUCH_ROLL_OUT(inline,never) : String;
	static var TOUCH_ROLL_OVER(inline,never) : String;
	static var TOUCH_TAP(inline,never) : String;
	@:noCompletion static function __create(type : String, touch : Dynamic, stageX : Float, stageY : Float, local : openfl.geom.Point, target : openfl.display.InteractiveObject) : TouchEvent;
}
