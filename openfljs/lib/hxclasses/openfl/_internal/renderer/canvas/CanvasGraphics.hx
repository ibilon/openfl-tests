package openfl._internal.renderer.canvas;

@:access(openfl.display.DisplayObject) @:access(openfl.display.BitmapData) @:access(openfl.display.Graphics) @:access(openfl.display.Tilesheet) extern class CanvasGraphics {
	static function render(graphics : openfl.display.Graphics, renderSession : openfl._internal.renderer.RenderSession) : Void;
	static function renderMask(graphics : openfl.display.Graphics, renderSession : openfl._internal.renderer.RenderSession) : Void;
}
