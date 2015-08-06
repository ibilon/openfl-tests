package openfl.display;

@:access(openfl.display.BitmapData) @:access(openfl.display.Graphics) @:access(openfl.geom.Rectangle) extern class Bitmap extends DisplayObject {
	var bitmapData : BitmapData;
	var pixelSnapping : PixelSnapping;
	var smoothing : Bool;
	function new(?bitmapData : BitmapData, ?pixelSnapping : PixelSnapping, smoothing : Bool = false) : Void;
}
