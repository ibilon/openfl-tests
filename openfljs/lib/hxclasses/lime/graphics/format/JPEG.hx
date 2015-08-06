package lime.graphics.format;

extern class JPEG {
	static function decodeBytes(bytes : lime.utils.ByteArray, decodeData : Bool = false) : lime.graphics.Image;
	static function decodeFile(path : String, decodeData : Bool = false) : lime.graphics.Image;
	static function encode(image : lime.graphics.Image, quality : Int) : lime.utils.ByteArray;
}
