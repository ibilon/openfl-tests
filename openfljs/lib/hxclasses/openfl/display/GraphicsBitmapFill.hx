package openfl.display;

extern class GraphicsBitmapFill implements IGraphicsFill implements IGraphicsData {
	@:noCompletion var __graphicsDataType(default,null) : GraphicsDataType;
	@:noCompletion var __graphicsFillType(default,null) : GraphicsFillType;
	var bitmapData : BitmapData;
	var matrix : openfl.geom.Matrix;
	var repeat : Bool;
	var smooth : Bool;
	function new(?bitmapData : BitmapData, ?matrix : openfl.geom.Matrix, repeat : Bool = false, smooth : Bool = false) : Void;
}
