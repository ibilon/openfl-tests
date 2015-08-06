package lime.math;

extern class Vector4 {
	var length(get,null) : Float;
	var lengthSquared(get,null) : Float;
	var w : Float;
	var x : Float;
	var y : Float;
	var z : Float;
	function new(x : Float = 0, y : Float = 0, z : Float = 0, w : Float = 0) : Void;
	function add(a : Vector4) : Vector4;
	function clone() : Vector4;
	function copyFrom(sourceVector4 : Vector4) : Void;
	function crossProduct(a : Vector4) : Vector4;
	function decrementBy(a : Vector4) : Void;
	function dotProduct(a : Vector4) : Float;
	function equals(toCompare : Vector4, allFour : Null<Bool> = false) : Bool;
	function incrementBy(a : Vector4) : Void;
	function nearEquals(toCompare : Vector4, tolerance : Float, allFour : Null<Bool> = false) : Bool;
	function negate() : Void;
	function normalize() : Float;
	function project() : Void;
	function scaleBy(s : Float) : Void;
	function setTo(xa : Float, ya : Float, za : Float) : Void;
	function subtract(a : Vector4) : Vector4;
	function toString() : String;
	static var X_AXIS(get,null) : Vector4;
	static var Y_AXIS(get,null) : Vector4;
	static var Z_AXIS(get,null) : Vector4;
	static function angleBetween(a : Vector4, b : Vector4) : Float;
	static function distance(pt1 : Vector4, pt2 : Vector4) : Float;
}
