package lime.text;

@:access(lime.text.Glyph) @:autoBuild(lime.Assets.embedFont()) extern class Font {
	var ascender(get,null) : Int;
	var descender(get,null) : Int;
	var height(get,null) : Int;
	var name(default,null) : String;
	var numGlyphs(get,null) : Int;
	var src : Dynamic;
	var underlinePosition(get,null) : Int;
	var underlineThickness(get,null) : Int;
	var unitsPerEM(get,null) : Int;
	function new(?name : String) : Void;
	function decompose() : NativeFontData;
	function getGlyph(character : String) : Glyph;
	function getGlyphMetrics(glyph : Glyph) : GlyphMetrics;
	function getGlyphs(?characters : String) : Array<Glyph>;
	function renderGlyph(glyph : Glyph, fontSize : Int) : lime.graphics.Image;
	function renderGlyphs(glyphs : Array<Glyph>, fontSize : Int) : Map<Glyph,lime.graphics.Image>;
	static function fromBytes(bytes : lime.utils.ByteArray) : Font;
	static function fromFile(path : String) : Font;
}
