package openfl._internal.text;

extern class TextFormatRange {
	var end : Int;
	var format : openfl.text.TextFormat;
	var start : Int;
	function new(format : openfl.text.TextFormat, start : Int, end : Int) : Void;
}
