package openfl._internal.aglsl;

extern class AGALTokenizer {
	function new() : Void;
	function decribeAGALByteArray(bytes : openfl.utils.ByteArray) : Description;
	function readReg(s : Destination, mh : Int, desc : Description, bytes : openfl.utils.ByteArray) : Void;
}
