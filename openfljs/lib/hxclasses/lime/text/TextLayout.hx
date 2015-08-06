package lime.text;

@:access(lime.text.Font) extern class TextLayout {
	var direction(get,set) : TextDirection;
	var font(default,set) : Font;
	var glyphs(get,null) : Array<Glyph>;
	var language(get,set) : String;
	@:isVar var positions(get,null) : Array<GlyphPosition>;
	var script(get,set) : TextScript;
	var size(default,set) : Int;
	var text(default,set) : String;
	function new(?text : String, ?font : Font, size : Int = 0, direction : TextDirection = null, ?script : TextScript, ?language : String) : Void;
}
