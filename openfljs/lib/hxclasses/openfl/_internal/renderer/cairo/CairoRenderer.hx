package openfl._internal.renderer.cairo;

@:access(openfl.display.Graphics) @:access(openfl.display.Stage) @:allow(openfl.display.Stage) extern class CairoRenderer extends openfl._internal.renderer.AbstractRenderer {
	function new(width : Int, height : Int, cairo : lime.graphics.cairo.Cairo) : Void;
}
