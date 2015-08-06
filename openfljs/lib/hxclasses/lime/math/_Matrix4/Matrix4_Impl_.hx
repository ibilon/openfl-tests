package lime.math._Matrix4;

extern class lime.math.priv_Matrix4.Matrix4_Impl_ {
	@:impl static var determinant(get,never) : Float;
	@:impl static var position(get,set) : lime.math.Vector4;
	@:impl static function _new(?data : lime.utils.Float32Array) : lime.math.Matrix4;
	@:impl static function append(this : lime.utils.Float32Array, lhs : lime.math.Matrix4) : Void;
	@:impl static function appendRotation(this : lime.utils.Float32Array, degrees : Float, axis : lime.math.Vector4, ?pivotPoint : lime.math.Vector4) : Void;
	@:impl static function appendScale(this : lime.utils.Float32Array, xScale : Float, yScale : Float, zScale : Float) : Void;
	@:impl static function appendTranslation(this : lime.utils.Float32Array, x : Float, y : Float, z : Float) : Void;
	@:impl static function clone(this : lime.utils.Float32Array) : lime.math.Matrix4;
	@:impl static function copyColumnFrom(this : lime.utils.Float32Array, column : Int, vector : lime.math.Vector4) : Void;
	@:impl static function copyColumnTo(this : lime.utils.Float32Array, column : Int, vector : lime.math.Vector4) : Void;
	@:impl static function copyFrom(this : lime.utils.Float32Array, other : lime.math.Matrix4) : Void;
	@:impl static function copyRowFrom(this : lime.utils.Float32Array, row : UInt, vector : lime.math.Vector4) : Void;
	@:impl static function copyRowTo(this : lime.utils.Float32Array, row : Int, vector : lime.math.Vector4) : Void;
	@:impl static function copyToMatrix4(this : lime.utils.Float32Array, other : lime.math.Matrix4) : Void;
	@:impl static function copythisFrom(this : lime.utils.Float32Array, array : lime.utils.Float32Array, index : UInt = 0, transposeValues : Bool = false) : Void;
	@:impl static function copythisTo(this : lime.utils.Float32Array, array : lime.utils.Float32Array, index : UInt = 0, transposeValues : Bool = false) : Void;
	static function create2D(x : Float, y : Float, scale : Float = 0, rotation : Float = 0) : lime.math.Matrix4;
	static function createABCD(a : Float, b : Float, c : Float, d : Float, tx : Float, ty : Float) : lime.math.Matrix4;
	static function createOrtho(x0 : Float, x1 : Float, y0 : Float, y1 : Float, zNear : Float, zFar : Float) : lime.math.Matrix4;
	@:impl static function deltaTransformVector(this : lime.utils.Float32Array, v : lime.math.Vector4) : lime.math.Vector4;
	@:impl @:arrayAccess static function get(this : lime.utils.Float32Array, index : Int) : Float;
	@:impl static function identity(this : lime.utils.Float32Array) : Void;
	static function interpolate(thisMat : lime.math.Matrix4, toMat : lime.math.Matrix4, percent : Float) : lime.math.Matrix4;
	@:impl static function interpolateTo(this : lime.utils.Float32Array, toMat : lime.math.Matrix4, percent : Float) : Void;
	@:impl static function invert(this : lime.utils.Float32Array) : Bool;
	@:impl static function pointAt(this : lime.utils.Float32Array, pos : lime.math.Vector4, ?at : lime.math.Vector4, ?up : lime.math.Vector4) : Void;
	@:impl static function prepend(this : lime.utils.Float32Array, rhs : lime.math.Matrix4) : Void;
	@:impl static function prependRotation(this : lime.utils.Float32Array, degrees : Float, axis : lime.math.Vector4, ?pivotPoint : lime.math.Vector4) : Void;
	@:impl static function prependScale(this : lime.utils.Float32Array, xScale : Float, yScale : Float, zScale : Float) : Void;
	@:impl static function prependTranslation(this : lime.utils.Float32Array, x : Float, y : Float, z : Float) : Void;
	@:impl @:arrayAccess static function set(this : lime.utils.Float32Array, index : Int, value : Float) : Float;
	@:impl static function transformVector(this : lime.utils.Float32Array, v : lime.math.Vector4) : lime.math.Vector4;
	@:impl static function transformVectors(this : lime.utils.Float32Array, ain : lime.utils.Float32Array, aout : lime.utils.Float32Array) : Void;
	@:impl static function transpose(this : lime.utils.Float32Array) : Void;
}
