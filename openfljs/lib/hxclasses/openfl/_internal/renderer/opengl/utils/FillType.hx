package openfl._internal.renderer.opengl.utils;

extern enum FillType {
	None;
	Color(color : Int, alpha : Float);
	Texture(bitmap : openfl.display.BitmapData, matrix : openfl.geom.Matrix, repeat : Bool, smooth : Bool);
	Gradient;
}
