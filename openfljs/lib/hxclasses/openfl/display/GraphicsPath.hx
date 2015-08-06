package openfl.display;

extern class GraphicsPath implements IGraphicsPath implements IGraphicsData {
	@:noCompletion @:dox(hide) var __graphicsDataType(default,null) : GraphicsDataType;
	var commands : openfl.Vector<Int>;
	var data : openfl.Vector<Float>;
	var winding : GraphicsPathWinding;
	function new(?commands : openfl.Vector<Int>, ?data : openfl.Vector<Float>, ?winding : GraphicsPathWinding) : Void;
	function curveTo(controlX : Float, controlY : Float, anchorX : Float, anchorY : Float) : Void;
	function lineTo(x : Float, y : Float) : Void;
	function moveTo(x : Float, y : Float) : Void;
	function wideLineTo(x : Float, y : Float) : Void;
	function wideMoveTo(x : Float, y : Float) : Void;
}
