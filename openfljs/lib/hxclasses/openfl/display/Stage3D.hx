package openfl.display;

extern class Stage3D extends openfl.events.EventDispatcher {
	var context3D : openfl.display3D.Context3D;
	var visible : Bool;
	var x : Float;
	var y : Float;
	function new() : Void;
	function requestContext3D(?context3DRenderMode : String) : Void;
}
