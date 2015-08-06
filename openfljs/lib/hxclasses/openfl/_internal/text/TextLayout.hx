package openfl._internal.text;

@:access(openfl._internal.text.TextEngine) @:access(openfl.text.TextField) extern class TextLayout {
	function new() : Void;
	function getLineMetric(textEngine : TextEngine, line : Int, metric : TextFieldLineMetric) : Float;
	function getLineWidth(textEngine : TextEngine, line : Int) : Float;
	function getTextHeight(textEngine : TextEngine) : Float;
	function getTextWidth(textEngine : TextEngine, text : String) : Float;
	function measureText(textEngine : TextEngine, condense : Bool = false) : Array<Float>;
}
