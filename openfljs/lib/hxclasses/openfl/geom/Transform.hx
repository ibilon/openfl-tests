package openfl.geom;

extern class Transform {
	var colorTransform(get,set) : ColorTransform;
	var concatenatedColorTransform : ColorTransform;
	var concatenatedMatrix : Matrix;
	var matrix(get,set) : Matrix;
	var matrix3D(get,set) : Matrix3D;
	var pixelBounds : Rectangle;
	function new(displayObject : openfl.display.DisplayObject) : Void;
}
