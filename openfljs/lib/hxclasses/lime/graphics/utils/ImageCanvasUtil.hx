package lime.graphics.utils;

@:access(lime.graphics.ImageBuffer) extern class ImageCanvasUtil {
	static function colorTransform(image : lime.graphics.Image, rect : lime.math.Rectangle, colorMatrix : lime.math.ColorMatrix) : Void;
	static function convertToCanvas(image : lime.graphics.Image) : Void;
	static function convertToData(image : lime.graphics.Image) : Void;
	static function copyChannel(image : lime.graphics.Image, sourceImage : lime.graphics.Image, sourceRect : lime.math.Rectangle, destPoint : lime.math.Vector2, sourceChannel : lime.graphics.ImageChannel, destChannel : lime.graphics.ImageChannel) : Void;
	static function copyPixels(image : lime.graphics.Image, sourceImage : lime.graphics.Image, sourceRect : lime.math.Rectangle, destPoint : lime.math.Vector2, ?alphaImage : lime.graphics.Image, ?alphaPoint : lime.math.Vector2, mergeAlpha : Bool = false) : Void;
	@:has_untyped static function createCanvas(image : lime.graphics.Image, width : Int, height : Int) : Void;
	static function createImageData(image : lime.graphics.Image) : Void;
	static function fillRect(image : lime.graphics.Image, rect : lime.math.Rectangle, color : Int, format : lime.graphics.PixelFormat) : Void;
	static function floodFill(image : lime.graphics.Image, x : Int, y : Int, color : Int, format : lime.graphics.PixelFormat) : Void;
	static function getPixel(image : lime.graphics.Image, x : Int, y : Int, format : lime.graphics.PixelFormat) : Int;
	static function getPixel32(image : lime.graphics.Image, x : Int, y : Int, format : lime.graphics.PixelFormat) : Int;
	static function getPixels(image : lime.graphics.Image, rect : lime.math.Rectangle, format : lime.graphics.PixelFormat) : lime.utils.ByteArray;
	static function merge(image : lime.graphics.Image, sourceImage : lime.graphics.Image, sourceRect : lime.math.Rectangle, destPoint : lime.math.Vector2, redMultiplier : Int, greenMultiplier : Int, blueMultiplier : Int, alphaMultiplier : Int) : Void;
	static function resize(image : lime.graphics.Image, newWidth : Int, newHeight : Int) : Void;
	static function scroll(image : lime.graphics.Image, x : Int, y : Int) : Void;
	static function setPixel(image : lime.graphics.Image, x : Int, y : Int, color : Int, format : lime.graphics.PixelFormat) : Void;
	static function setPixel32(image : lime.graphics.Image, x : Int, y : Int, color : Int, format : lime.graphics.PixelFormat) : Void;
	static function setPixels(image : lime.graphics.Image, rect : lime.math.Rectangle, byteArray : lime.utils.ByteArray, format : lime.graphics.PixelFormat) : Void;
	static function sync(image : lime.graphics.Image) : Void;
}
