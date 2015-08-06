package openfl.display;

extern class GraphicsSolidFill implements IGraphicsFill implements IGraphicsData {
	@:noCompletion @:dox(hide) var __graphicsDataType(default,null) : GraphicsDataType;
	@:noCompletion @:dox(hide) var __graphicsFillType(default,null) : GraphicsFillType;
	var alpha : Float;
	var color : UInt;
	function new(color : UInt = 0, alpha : Float = 0) : Void;
}
