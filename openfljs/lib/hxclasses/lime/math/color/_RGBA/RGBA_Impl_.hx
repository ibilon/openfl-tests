package lime.math.color._RGBA;

@:allow(lime.math.color) extern class lime.math.color.priv_RGBA.RGBA_Impl_ {
	@:impl static var a(get,set) : Int;
	@:impl static var b(get,set) : Int;
	@:impl static var g(get,set) : Int;
	@:impl static var r(get,set) : Int;
	@:impl static function _new(rgba : Int = 0) : lime.math.color.RGBA;
	static function create(r : Int, g : Int, b : Int, a : Int) : lime.math.color.RGBA;
	@:impl static function multiplyAlpha(this : Int) : Void;
	@:impl static function readUInt8(this : Int, data : lime.utils.UInt8Array, offset : Int, format : lime.graphics.PixelFormat = null, premultiplied : Bool = false) : Void;
	@:impl static function set(this : Int, r : Int, g : Int, b : Int, a : Int) : Void;
	@:impl static function unmultiplyAlpha(this : Int) : Void;
	@:impl static function writeUInt8(this : Int, data : lime.utils.UInt8Array, offset : Int, format : lime.graphics.PixelFormat = null, premultiplied : Bool = false) : Void;
}
