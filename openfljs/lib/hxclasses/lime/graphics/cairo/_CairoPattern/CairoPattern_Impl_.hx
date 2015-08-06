package lime.graphics.cairo._CairoPattern;

extern class lime.graphics.cairo.priv_CairoPattern.CairoPattern_Impl_ {
	@:impl static var colorStopCount(get,never) : Int;
	@:impl static var extend(get,set) : lime.graphics.cairo.CairoExtend;
	@:impl static var filter(get,set) : lime.graphics.cairo.CairoFilter;
	@:impl static var matrix(get,set) : lime.math.Matrix3;
	@:impl static function _new(handle : Unknown) : lime.graphics.cairo.CairoPattern;
	@:impl static function addColorStopRGB(this : Dynamic, offset : Float, r : Float, g : Float, b : Float) : Void;
	@:impl static function addColorStopRGBA(this : Dynamic, offset : Float, r : Float, g : Float, b : Float, a : Float) : Void;
	static function createForSurface(surface : lime.graphics.cairo.CairoSurface) : lime.graphics.cairo.CairoPattern;
	static function createLinear(x0 : Float, y0 : Float, x1 : Float, y1 : Float) : lime.graphics.cairo.CairoPattern;
	static function createRGB(r : Float, g : Float, b : Float) : lime.graphics.cairo.CairoPattern;
	static function createRGBA(r : Float, g : Float, b : Float, a : Float) : lime.graphics.cairo.CairoPattern;
	static function createRadial(cx0 : Float, cy0 : Float, radius0 : Float, cx1 : Float, cy1 : Float, radius1 : Float) : lime.graphics.cairo.CairoPattern;
	@:impl static function destroy(this : Dynamic) : Void;
}
