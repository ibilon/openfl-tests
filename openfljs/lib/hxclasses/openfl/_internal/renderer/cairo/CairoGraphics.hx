package openfl._internal.renderer.cairo;

@:access(openfl.display.DisplayObject) @:access(openfl.display.BitmapData) @:access(openfl.display.Graphics) @:access(openfl.display.Tilesheet) @:access(openfl.geom.Matrix) extern class CairoGraphics {
	static function render(graphics : openfl.display.Graphics, renderSession : openfl._internal.renderer.RenderSession) : Void;
	static function renderMask(graphics : openfl.display.Graphics, renderSession : openfl._internal.renderer.RenderSession) : Void;
}
