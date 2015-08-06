package lime.graphics.cairo._CairoImageSurface;

extern class lime.graphics.cairo.priv_CairoImageSurface.CairoImageSurface_Impl_ {
	@:impl static var data(get,never) : Dynamic;
	@:impl static var format(get,never) : lime.graphics.cairo.CairoFormat;
	@:impl static var height(get,never) : Int;
	@:impl static var stride(get,never) : Int;
	@:impl static var width(get,never) : Int;
	@:impl static function _new(format : lime.graphics.cairo.CairoFormat, width : Int, height : Int) : lime.graphics.cairo.CairoImageSurface;
	static function create(data : Dynamic, format : lime.graphics.cairo.CairoFormat, width : Int, height : Int, stride : Int) : lime.graphics.cairo.CairoSurface;
	static function fromImage(image : lime.graphics.Image) : lime.graphics.cairo.CairoSurface;
}
