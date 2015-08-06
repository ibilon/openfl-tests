package openfl._internal.renderer.opengl.utils;

extern class PolyK {
	static function _PointInTriangle(px : Float, py : Float, ax : Float, ay : Float, bx : Float, by : Float, cx : Float, cy : Float) : Bool;
	static function _convex(ax : Float, ay : Float, bx : Float, by : Float, cx : Float, cy : Float, sign : Bool) : Bool;
	static function triangulate(p : Array<Float>) : Array<Int>;
}
