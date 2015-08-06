package lime.math._ColorMatrix;

extern class lime.math.priv_ColorMatrix.ColorMatrix_Impl_ {
	@:impl static var alphaMultiplier(get,set) : Float;
	@:impl static var alphaOffset(get,set) : Float;
	@:impl static var blueMultiplier(get,set) : Float;
	@:impl static var blueOffset(get,set) : Float;
	@:impl static var color(get,set) : Int;
	@:impl static var greenMultiplier(get,set) : Float;
	@:impl static var greenOffset(get,set) : Float;
	@:impl static var redMultiplier(get,set) : Float;
	@:impl static var redOffset(get,set) : Float;
	@:impl static function _new(?data : lime.utils.Float32Array) : lime.math.ColorMatrix;
	@:impl static function clone(this : lime.utils.Float32Array) : lime.math.ColorMatrix;
	@:impl static function concat(this : lime.utils.Float32Array, second : lime.math.ColorMatrix) : Void;
	@:impl static function copyFrom(this : lime.utils.Float32Array, other : lime.math.ColorMatrix) : Void;
	@:impl @:arrayAccess static function get(this : lime.utils.Float32Array, index : Int) : Float;
	@:impl static function getAlphaTable(this : lime.utils.Float32Array) : lime.utils.UInt8Array;
	@:impl static function getBlueTable(this : lime.utils.Float32Array) : lime.utils.UInt8Array;
	@:impl static function getGreenTable(this : lime.utils.Float32Array) : lime.utils.UInt8Array;
	@:impl static function getRedTable(this : lime.utils.Float32Array) : lime.utils.UInt8Array;
	@:impl static function identity(this : lime.utils.Float32Array) : Void;
	@:impl @:arrayAccess static function set(this : lime.utils.Float32Array, index : Int, value : Float) : Float;
}
