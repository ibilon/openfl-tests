package openfl._internal.renderer.canvas;

@:access(openfl._internal.text.TextEngine) @:access(openfl.display.Graphics) @:access(openfl.text.TextField) extern class CanvasTextField {
	static function disableInputMode(textEngine : openfl._internal.text.TextEngine) : Void;
	@:has_untyped static function enableInputMode(textEngine : openfl._internal.text.TextEngine) : Void;
	static function render(textEngine : openfl._internal.text.TextEngine, renderSession : openfl._internal.renderer.RenderSession) : Void;
}
