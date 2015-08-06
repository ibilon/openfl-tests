package lime.graphics.cairo;

extern class CairoFont {
	var font(default,null) : lime.text.Font;
	@:noCompletion var handle : Dynamic;
	function new(font : lime.text.Font) : Void;
	function destroy() : Void;
}
