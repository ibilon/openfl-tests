package lime.math.color._BGRA;

extern class lime.math.color.priv_BGRA.BGRA_Impl_ {
	@:impl static var a(get,set) : Int;
	@:impl static var b(get,set) : Int;
	@:impl static var g(get,set) : Int;
	@:impl static var r(get,set) : Int;
	@:impl static function _new(bgra : Int = 0) : lime.math.color.BGRA;
	static function create(b : Int, g : Int, r : Int, a : Int) : lime.math.color.BGRA;
	@:impl static function multiplyAlpha(this : Int) : Void;
	@:impl static function readUInt8(this : Int, data : lime.utils.UInt8Array, offset : Int, format : lime.graphics.PixelFormat = null, premultiplied : Bool = false) : Void;
	@:impl static function set(this : Int, b : Int, g : Int, r : Int, a : Int) : Void;
	@:impl static function unmultiplyAlpha(this : Int) : Void;
	@:impl static function writeUInt8(this : Int, data : lime.utils.UInt8Array, offset : Int, format : lime.graphics.PixelFormat = null, premultiplied : Bool = false) : Void;
}
