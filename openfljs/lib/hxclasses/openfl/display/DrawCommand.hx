package openfl.display;

@:noCompletion @:dox(hide) extern enum DrawCommand {
	BeginBitmapFill(bitmap : BitmapData, matrix : openfl.geom.Matrix, repeat : Bool, smooth : Bool);
	BeginFill(color : Int, alpha : Float);
	BeginGradientFill(type : GradientType, colors : Array<Dynamic>, alphas : Array<Dynamic>, ratios : Array<Dynamic>, matrix : openfl.geom.Matrix, spreadMethod : Null<SpreadMethod>, interpolationMethod : Null<InterpolationMethod>, focalPointRatio : Null<Float>);
	CubicCurveTo(controlX1 : Float, controlY1 : Float, controlX2 : Float, controlY2 : Float, anchorX : Float, anchorY : Float);
	CurveTo(controlX : Float, controlY : Float, anchorX : Float, anchorY : Float);
	DrawCircle(x : Float, y : Float, radius : Float);
	DrawEllipse(x : Float, y : Float, width : Float, height : Float);
	DrawRect(x : Float, y : Float, width : Float, height : Float);
	DrawRoundRect(x : Float, y : Float, width : Float, height : Float, rx : Float, ry : Float);
	DrawTiles(sheet : Tilesheet, tileData : Array<Float>, smooth : Bool, flags : Int, count : Int);
	DrawTriangles(vertices : openfl.Vector<Float>, indices : openfl.Vector<Int>, uvtData : openfl.Vector<Float>, culling : TriangleCulling, colors : openfl.Vector<Int>, blendMode : Int);
	EndFill;
	LineStyle(thickness : Null<Float>, color : Null<Int>, alpha : Null<Float>, pixelHinting : Null<Bool>, scaleMode : LineScaleMode, caps : CapsStyle, joints : JointStyle, miterLimit : Null<Float>);
	LineBitmapStyle(bitmap : BitmapData, matrix : openfl.geom.Matrix, repeat : Bool, smooth : Bool);
	LineGradientStyle(type : GradientType, colors : Array<Dynamic>, alphas : Array<Dynamic>, ratios : Array<Dynamic>, matrix : openfl.geom.Matrix, spreadMethod : Null<SpreadMethod>, interpolationMethod : Null<InterpolationMethod>, focalPointRatio : Null<Float>);
	LineTo(x : Float, y : Float);
	MoveTo(x : Float, y : Float);
	DrawPathC(commands : openfl.Vector<Int>, data : openfl.Vector<Float>, winding : GraphicsPathWinding);
	OverrideMatrix(matrix : openfl.geom.Matrix);
}
