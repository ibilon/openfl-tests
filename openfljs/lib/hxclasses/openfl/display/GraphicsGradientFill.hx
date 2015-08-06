package openfl.display;

extern class GraphicsGradientFill implements IGraphicsFill implements IGraphicsData {
	var __graphicsDataType(default,null) : GraphicsDataType;
	var __graphicsFillType(default,null) : GraphicsFillType;
	var alphas : Array<Float>;
	var colors : Array<Int>;
	var focalPointRatio : Float;
	var interpolationMethod : InterpolationMethod;
	var matrix : openfl.geom.Matrix;
	var ratios : Array<Float>;
	var spreadMethod : SpreadMethod;
	var type : GradientType;
	function new(?type : GradientType, ?colors : Array<Int>, ?alphas : Array<Float>, ?ratios : Array<Float>, ?matrix : openfl.geom.Matrix, ?spreadMethod : SpreadMethod, ?interpolationMethod : InterpolationMethod, focalPointRatio : Float = 0) : Void;
}
