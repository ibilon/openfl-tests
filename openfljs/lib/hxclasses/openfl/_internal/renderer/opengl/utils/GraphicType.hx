package openfl._internal.renderer.opengl.utils;

extern enum GraphicType {
	Polygon;
	Rectangle(rounded : Bool);
	Circle;
	Ellipse;
	DrawTriangles(vertices : openfl.Vector<Float>, indices : openfl.Vector<Int>, uvtData : openfl.Vector<Float>, culling : openfl.display.TriangleCulling, colors : openfl.Vector<Int>, blendMode : Int);
	DrawTiles(sheet : openfl.display.Tilesheet, tileData : Array<Float>, smooth : Bool, flags : Int, count : Int);
	OverrideMatrix(matrix : openfl.geom.Matrix);
}
