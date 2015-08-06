package openfl.net;

extern class Socket extends openfl.events.EventDispatcher {
	var bytesAvailable(get,null) : Int;
	var bytesPending(get,null) : Int;
	var connected(get,null) : Bool;
	@:isVar var endian(get,set) : String;
	var objectEncoding : Int;
	var timeout : Int;
	function new(?host : String, port : Int = 0) : Void;
	function close() : Void;
	@:has_untyped function connect(?host : String, port : Null<Int> = 0) : Void;
	function flush() : Void;
	function readBoolean() : Bool;
	function readByte() : Int;
	function readBytes(bytes : openfl.utils.ByteArray, offset : Int = 0, length : Int = 0) : Void;
	function readDouble() : Float;
	function readFloat() : Float;
	function readInt() : Int;
	function readMultiByte(length : Int, charSet : String) : String;
	function readShort() : Int;
	function readUTF() : String;
	function readUTFBytes(length : Int) : String;
	function readUnsignedByte() : Int;
	function readUnsignedInt() : Int;
	function readUnsignedShort() : Int;
	function writeBoolean(value : Bool) : Void;
	function writeByte(value : Int) : Void;
	function writeBytes(bytes : openfl.utils.ByteArray, offset : Int = 0, length : Int = 0) : Void;
	function writeDouble(value : Float) : Void;
	function writeFloat(value : Float) : Void;
	function writeInt(value : Int) : Void;
	function writeMultiByte(value : String, charSet : String) : Void;
	function writeShort(value : Int) : Void;
	function writeUTF(value : String) : Void;
	function writeUTFBytes(value : String) : Void;
	function writeUnsignedInt(value : Int) : Void;
}
