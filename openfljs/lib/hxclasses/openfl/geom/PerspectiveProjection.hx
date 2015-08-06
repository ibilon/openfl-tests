package openfl.geom;

extern class PerspectiveProjection {
	var fieldOfView(default,set) : Float;
	var focalLength : Float;
	var projectionCenter : Point;
	function new() : Void;
	function toMatrix3D() : Matrix3D;
	static var TO_RADIAN(inline,never) : Float;
}
