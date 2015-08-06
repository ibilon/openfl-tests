package openfl.display;

@:access(openfl.display.Graphics) @:access(openfl.display.Stage) extern class Sprite extends DisplayObjectContainer {
	var buttonMode : Bool;
	var graphics(get,null) : Graphics;
	var useHandCursor : Bool;
	function new() : Void;
	function startDrag(lockCenter : Bool = false, ?bounds : openfl.geom.Rectangle) : Void;
	function stopDrag() : Void;
}
