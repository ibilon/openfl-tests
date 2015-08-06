package openfl._internal.renderer.dom;

@:access(openfl.display.DisplayObject) @:access(openfl.display.Stage) @:access(openfl.geom.Matrix) @:access(openfl.geom.Rectangle) extern class DOMRenderer extends openfl._internal.renderer.AbstractRenderer {
	@:has_untyped function new(width : Int, height : Int, element : lime.graphics.DOMRenderContext) : Void;
	static function applyStyle(displayObject : openfl.display.DisplayObject, renderSession : openfl._internal.renderer.RenderSession, setTransform : Bool, setAlpha : Bool, setClip : Bool) : Void;
	static function initializeElement(displayObject : openfl.display.DisplayObject, element : js.html.Element, renderSession : openfl._internal.renderer.RenderSession) : Void;
}
