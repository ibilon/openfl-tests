package lime.utils;

extern interface IDataInput {
	var bytesAvailable(get,null) : Int;
	var endian(get,set) : String;
	function readBoolean() : Bool;
	function readByte() : Int;
	function readBytes(outData : ByteArray, inOffset : Int = 0, inLen : Int = 0) : Void;
	function readDouble() : Float;
	function readFloat() : Float;
	function readInt() : Int;
	function readShort() : Int;
	function readUTF() : String;
	function readUTFBytes(inLen : Int) : String;
	function readUnsignedByte() : Int;
	function readUnsignedInt() : Int;
	function readUnsignedShort() : Int;
}
