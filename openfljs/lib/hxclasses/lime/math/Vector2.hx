package lime.math;

extern class Vector2 {
	var length(get,null) : Float;
	var x : Float;
	var y : Float;
	function new(x : Float = 0, y : Float = 0) : Void;
	function add(v : Vector2) : Vector2;
	function clone() : Vector2;
	function equals(toCompare : Vector2) : Bool;
	function normalize(thickness : Float) : Void;
	function offset(dx : Float, dy : Float) : Void;
	function setTo(xa : Float, ya : Float) : Void;
	function subtract(v : Vector2) : Vector2;
	static function distance(pt1 : Vector2, pt2 : Vector2) : Float;
	static function interpolate(pt1 : Vector2, pt2 : Vector2, f : Float) : Vector2;
	static function polar(len : Float, angle : Float) : Vector2;
}
