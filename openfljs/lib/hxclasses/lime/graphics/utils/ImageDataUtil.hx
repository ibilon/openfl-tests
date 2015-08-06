package lime.graphics.utils;

@:access(lime.math.color.RGBA) extern class ImageDataUtil {
	static function colorTransform(image : lime.graphics.Image, rect : lime.math.Rectangle, colorMatrix : lime.math.ColorMatrix) : Void;
	static function copyChannel(image : lime.graphics.Image, sourceImage : lime.graphics.Image, sourceRect : lime.math.Rectangle, destPoint : lime.math.Vector2, sourceChannel : lime.graphics.ImageChannel, destChannel : lime.graphics.ImageChannel) : Void;
	static function copyPixels(image : lime.graphics.Image, sourceImage : lime.graphics.Image, sourceRect : lime.math.Rectangle, destPoint : lime.math.Vector2, ?alphaImage : lime.graphics.Image, ?alphaPoint : lime.math.Vector2, mergeAlpha : Bool = false) : Void;
	static function fillRect(image : lime.graphics.Image, rect : lime.math.Rectangle, color : Int, format : lime.graphics.PixelFormat) : Void;
	static function floodFill(image : lime.graphics.Image, x : Int, y : Int, color : Int, format : lime.graphics.PixelFormat) : Void;
	static function getColorBoundsRect(image : lime.graphics.Image, mask : Int, color : Int, findColor : Bool = false, format : lime.graphics.PixelFormat) : lime.math.Rectangle;
	static function getPixel(image : lime.graphics.Image, x : Int, y : Int, format : lime.graphics.PixelFormat) : Int;
	static function getPixel32(image : lime.graphics.Image, x : Int, y : Int, format : lime.graphics.PixelFormat) : Int;
	static function getPixels(image : lime.graphics.Image, rect : lime.math.Rectangle, format : lime.graphics.PixelFormat) : lime.utils.ByteArray;
	static function merge(image : lime.graphics.Image, sourceImage : lime.graphics.Image, sourceRect : lime.math.Rectangle, destPoint : lime.math.Vector2, redMultiplier : Int, greenMultiplier : Int, blueMultiplier : Int, alphaMultiplier : Int) : Void;
	static function multiplyAlpha(image : lime.graphics.Image) : Void;
	static function resize(image : lime.graphics.Image, newWidth : Int, newHeight : Int) : Void;
	static function resizeBuffer(image : lime.graphics.Image, newWidth : Int, newHeight : Int) : Void;
	static function setFormat(image : lime.graphics.Image, format : lime.graphics.PixelFormat) : Void;
	static function setPixel(image : lime.graphics.Image, x : Int, y : Int, color : Int, format : lime.graphics.PixelFormat) : Void;
	static function setPixel32(image : lime.graphics.Image, x : Int, y : Int, color : Int, format : lime.graphics.PixelFormat) : Void;
	static function setPixels(image : lime.graphics.Image, rect : lime.math.Rectangle, byteArray : lime.utils.ByteArray, format : lime.graphics.PixelFormat) : Void;
	static function unmultiplyAlpha(image : lime.graphics.Image) : Void;
}
