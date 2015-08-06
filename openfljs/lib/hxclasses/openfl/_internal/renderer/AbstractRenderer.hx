package openfl._internal.renderer;

extern class AbstractRenderer {
	var height : Int;
	var transparent : Bool;
	var width : Int;
	function render(stage : openfl.display.Stage) : Void;
	function renderShape(shape : openfl.display.Shape) : Void;
	function resize(width : Int, height : Int) : Void;
	function setViewport(x : Int, y : Int, width : Int, height : Int) : Void;
}
