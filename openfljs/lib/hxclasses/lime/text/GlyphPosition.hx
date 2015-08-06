package lime.text;

extern class GlyphPosition {
	var advance : lime.math.Vector2;
	var glyph : Glyph;
	var offset : lime.math.Vector2;
	function new(glyph : Glyph, advance : lime.math.Vector2, ?offset : lime.math.Vector2) : Void;
}
