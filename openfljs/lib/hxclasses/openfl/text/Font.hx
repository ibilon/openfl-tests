package openfl.text;

@:build(lime.Assets.embedFont()) @:autoBuild(lime.Assets.embedFont()) extern class Font extends lime.text.Font {
	var fontName(get,set) : String;
	var fontStyle : FontStyle;
	var fontType : FontType;
	function new(?name : String) : Void;
	static function enumerateFonts(enumerateDeviceFonts : Bool = false) : Array<Font>;
	static function fromBytes(bytes : openfl.utils.ByteArray) : Font;
	static function fromFile(path : String) : Font;
	static function registerFont(font : Class<Dynamic>) : Void;
	@:noCompletion private static function __fromLimeFont (value:lime.text.Font):Font;
}
