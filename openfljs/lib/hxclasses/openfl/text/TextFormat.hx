package openfl.text;

extern class TextFormat {
	var align : TextFormatAlign;
	var blockIndent : Null<Int>;
	var bold : Null<Bool>;
	var bullet : Null<Bool>;
	var color : Null<Int>;
	var font : String;
	var indent : Null<Int>;
	var italic : Null<Bool>;
	var kerning : Null<Bool>;
	var leading : Null<Int>;
	var leftMargin : Null<Int>;
	var letterSpacing : Null<Float>;
	var rightMargin : Null<Int>;
	var size : Null<Int>;
	var tabStops : Array<Int>;
	var target : String;
	var underline : Null<Bool>;
	var url : String;
	function new(?font : String, size : Null<Int> = 0, color : Null<Int> = 0, bold : Null<Bool> = false, italic : Null<Bool> = false, underline : Null<Bool> = false, ?url : String, ?target : String, ?align : TextFormatAlign, leftMargin : Null<Int> = 0, rightMargin : Null<Int> = 0, indent : Null<Int> = 0, leading : Null<Int> = 0) : Void;
	function clone() : TextFormat;
}
