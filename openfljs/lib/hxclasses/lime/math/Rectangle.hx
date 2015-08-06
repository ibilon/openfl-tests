package lime.math;

extern class Rectangle {
	var bottom(get,set) : Float;
	var bottomRight(get,set) : Vector2;
	var height : Float;
	var left(get,set) : Float;
	var right(get,set) : Float;
	var size(get,set) : Vector2;
	var top(get,set) : Float;
	var topLeft(get,set) : Vector2;
	var width : Float;
	var x : Float;
	var y : Float;
	function new(x : Float = 0, y : Float = 0, width : Float = 0, height : Float = 0) : Void;
	function __contract(x : Float, y : Float, width : Float, height : Float) : Void;
	function __expand(x : Float, y : Float, width : Float, height : Float) : Void;
	function clone() : Rectangle;
	function contains(x : Float, y : Float) : Bool;
	function containsPoint(point : Vector2) : Bool;
	function containsRect(rect : Rectangle) : Bool;
	function copyFrom(sourceRect : Rectangle) : Void;
	function equals(toCompare : Rectangle) : Bool;
	function inflate(dx : Float, dy : Float) : Void;
	function inflatePoint(point : Vector2) : Void;
	function intersection(toIntersect : Rectangle) : Rectangle;
	function intersects(toIntersect : Rectangle) : Bool;
	function isEmpty() : Bool;
	function offset(dx : Float, dy : Float) : Void;
	function offsetPoint(point : Vector2) : Void;
	function setEmpty() : Void;
	function setTo(xa : Float, ya : Float, widtha : Float, heighta : Float) : Void;
	function transform(m : Matrix3) : Rectangle;
	function union(toUnion : Rectangle) : Rectangle;
}
