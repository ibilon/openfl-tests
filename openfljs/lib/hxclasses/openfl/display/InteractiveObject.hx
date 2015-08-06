package openfl.display;

extern class InteractiveObject extends DisplayObject {
	var doubleClickEnabled : Bool;
	var focusRect : Dynamic;
	var mouseEnabled : Bool;
	var needsSoftKeyboard : Bool;
	var softKeyboardInputAreaOfInterest : openfl.geom.Rectangle;
	var tabEnabled : Bool;
	var tabIndex : Int;
	function new() : Void;
	function requestSoftKeyboard() : Bool;
}
