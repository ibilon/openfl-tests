package lime.graphics.cairo;

extern class CairoFontOptions {
	var antialias(get,set) : CairoAntialias;
	@:noCompletion var handle : Dynamic;
	var hintMetrics(get,set) : CairoHintMetrics;
	var hintStyle(get,set) : CairoHintStyle;
	var subpixelOrder(get,set) : CairoSubpixelOrder;
	function new(?handle : Dynamic) : Void;
}
