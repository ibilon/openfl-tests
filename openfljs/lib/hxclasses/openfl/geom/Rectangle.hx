package openfl.geom;

extern class Rectangle {
	var bottom(get,set) : Float;
	var bottomRight(get,set) : Point;
	var height : Float;
	var left(get,set) : Float;
	var right(get,set) : Float;
	var size(get,set) : Point;
	var top(get,set) : Float;
	var topLeft(get,set) : Point;
	var width : Float;
	var x : Float;
	var y : Float;
	function new(x : Float = 0, y : Float = 0, width : Float = 0, height : Float = 0) : Void;
	@:noCompletion function __contract(x : Float, y : Float, width : Float, height : Float) : Void;
	@:noCompletion function __expand(x : Float, y : Float, width : Float, height : Float) : Void;
	function clone() : Rectangle;
	function contains(x : Float, y : Float) : Bool;
	function containsPoint(point : Point) : Bool;
	function containsRect(rect : Rectangle) : Bool;
	function copyFrom(sourceRect : Rectangle) : Void;
	function equals(toCompare : Rectangle) : Bool;
	function inflate(dx : Float, dy : Float) : Void;
	function inflatePoint(point : Point) : Void;
	function intersection(toIntersect : Rectangle) : Rectangle;
	function intersects(toIntersect : Rectangle) : Bool;
	function isEmpty() : Bool;
	function offset(dx : Float, dy : Float) : Void;
	function offsetPoint(point : Point) : Void;
	function setEmpty() : Void;
	function setTo(xa : Float, ya : Float, widtha : Float, heighta : Float) : Void;
	function union(toUnion : Rectangle) : Rectangle;
	static var __temp : Rectangle;
	function __transform (r:Rectangle, m:Matrix) : Void;
}
