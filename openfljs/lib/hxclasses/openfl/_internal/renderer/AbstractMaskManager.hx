package openfl._internal.renderer;

@:access(openfl.display.DisplayObject) @:keep extern class AbstractMaskManager {
	function new(renderSession : RenderSession) : Void;
	function popMask() : Void;
	function pushMask(mask : openfl.display.DisplayObject) : Void;
	function pushRect(rect : openfl.geom.Rectangle, transform : openfl.geom.Matrix) : Void;
}
