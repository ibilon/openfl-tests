package openfl;

extern class Memory {
	static function getByte(addr : Int) : Int;
	static function getDouble(addr : Int) : Float;
	static function getFloat(addr : Int) : Float;
	static function getI32(addr : Int) : Int;
	static function getUI16(addr : Int) : Int;
	static function select(inBytes : openfl.utils.ByteArray) : Void;
	static function setByte(addr : Int, v : Int) : Void;
	static function setDouble(addr : Int, v : Float) : Void;
	static function setFloat(addr : Int, v : Float) : Void;
	static function setI16(addr : Int, v : Int) : Void;
	static function setI32(addr : Int, v : Int) : Void;
}
