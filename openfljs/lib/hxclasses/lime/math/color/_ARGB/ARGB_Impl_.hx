package lime.math.color._ARGB;

extern class lime.math.color.priv_ARGB.ARGB_Impl_ {
	@:impl static var a(get,set) : Int;
	@:impl static var b(get,set) : Int;
	@:impl static var g(get,set) : Int;
	@:impl static var r(get,set) : Int;
	@:impl static function _new(argb : Int = 0) : lime.math.color.ARGB;
	static function create(a : Int, r : Int, g : Int, b : Int) : lime.math.color.ARGB;
	@:impl static function multiplyAlpha(this : Int) : Void;
	@:impl static function readUInt8(this : Int, data : lime.utils.UInt8Array, offset : Int, format : lime.graphics.PixelFormat = null, premultiplied : Bool = false) : Void;
	@:impl static function set(this : Int, a : Int, r : Int, g : Int, b : Int) : Void;
	@:impl static function unmultiplyAlpha(this : Int) : Void;
	@:impl static function writeUInt8(this : Int, data : lime.utils.UInt8Array, offset : Int, format : lime.graphics.PixelFormat = null, premultiplied : Bool = false) : Void;
}
