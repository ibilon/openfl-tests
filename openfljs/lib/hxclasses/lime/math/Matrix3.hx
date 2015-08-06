package lime.math;

extern class Matrix3 {
	var a : Float;
	var b : Float;
	var c : Float;
	var d : Float;
	var tx : Float;
	var ty : Float;
	function new(a : Float = 0, b : Float = 0, c : Float = 0, d : Float = 0, tx : Float = 0, ty : Float = 0) : Void;
	function __transformX(pos : Vector2) : Float;
	function __transformY(pos : Vector2) : Float;
	function __translateTransformed(pos : Vector2) : Void;
	function clone() : Matrix3;
	function concat(m : Matrix3) : Void;
	function copyColumnFrom(column : Int, vector4 : Vector4) : Void;
	function copyColumnTo(column : Int, vector4 : Vector4) : Void;
	function copyFrom(sourceMatrix3 : Matrix3) : Void;
	function copyRowFrom(row : Int, vector4 : Vector4) : Void;
	function copyRowTo(row : Int, vector4 : Vector4) : Void;
	function createBox(scaleX : Float, scaleY : Float, rotation : Float = 0, tx : Float = 0, ty : Float = 0) : Void;
	function createGradientBox(width : Float, height : Float, rotation : Float = 0, tx : Float = 0, ty : Float = 0) : Void;
	function deltaTransformVector2(Vector2 : Vector2) : Vector2;
	function equals(Matrix3 : {ty : Float, tx : Float, d : Float, c : Float, b : Float, a : Float}) : Bool;
	function identity() : Void;
	function invert() : Matrix3;
	function mult(m : Matrix3) : Matrix3;
	function rotate(theta : Float) : Void;
	function scale(sx : Float, sy : Float) : Void;
	function setTo(a : Float, b : Float, c : Float, d : Float, tx : Float, ty : Float) : Void;
	function to3DString(roundPixels : Bool = false) : String;
	function toMozString() : String;
	function toString() : String;
	function transformVector2(pos : Vector2) : Vector2;
	function translate(dx : Float, dy : Float) : Void;
}
