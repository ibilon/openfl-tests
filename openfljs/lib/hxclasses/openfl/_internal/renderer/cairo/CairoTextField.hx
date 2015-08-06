package openfl._internal.renderer.cairo;

@:access(openfl._internal.text.TextEngine) @:access(openfl.display.Graphics) @:access(openfl.display.BitmapData) @:access(openfl.text.Font) @:access(openfl.text.TextField) @:access(openfl.geom.Matrix) extern class CairoTextField {
	static function getFontInstance(format : openfl.text.TextFormat) : openfl.text.Font;
	static function render(textEngine : openfl._internal.text.TextEngine, renderSession : openfl._internal.renderer.RenderSession) : Void;
}
