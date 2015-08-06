package openfl._internal.renderer.dom;

@:access(openfl._internal.text.TextEngine) @:access(openfl.text.TextField) extern class DOMTextField {
	static function getFont(format : openfl.text.TextFormat) : String;
	static function measureText(textEngine : openfl._internal.text.TextEngine) : Void;
	static function render(textEngine : openfl._internal.text.TextEngine, renderSession : openfl._internal.renderer.RenderSession) : Void;
}
