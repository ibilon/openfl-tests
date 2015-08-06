package openfl.display;

extern class GraphicsStroke implements IGraphicsStroke implements IGraphicsData {
	@:noCompletion @:dox(hide) var __graphicsDataType(default,null) : GraphicsDataType;
	var caps : CapsStyle;
	var fill : IGraphicsFill;
	var joints : JointStyle;
	var miterLimit : Float;
	var pixelHinting : Bool;
	var scaleMode : LineScaleMode;
	var thickness : Float;
	function new(thickness : Float = 0, pixelHinting : Bool = false, ?scaleMode : LineScaleMode, ?caps : CapsStyle, ?joints : JointStyle, miterLimit : Float = 0, ?fill : IGraphicsFill) : Void;
}
