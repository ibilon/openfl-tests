package lime.graphics;

@:allow(lime.graphics.Image) extern class ImageBuffer {
	var bitsPerPixel : Int;
	var data : lime.utils.UInt8Array;
	var format : PixelFormat;
	var height : Int;
	var premultiplied : Bool;
	var src(get,set) : Dynamic;
	var stride(get,never) : Int;
	var transparent : Bool;
	var width : Int;
	function new(?data : lime.utils.UInt8Array, width : Int = 0, height : Int = 0, bitsPerPixel : Int = 0, format : Null<PixelFormat> = null) : Void;
	function clone() : ImageBuffer;
}
