package openfl.display3D;

extern class IndexBuffer3D {
	var glBuffer : openfl.gl.GLBuffer;
	var numIndices : Int;
	function new(glBuffer : openfl.gl.GLBuffer, numIndices : Int) : Void;
	function dispose() : Void;
	function uploadFromByteArray(byteArray : openfl.utils.ByteArray, byteArrayOffset : Int, startOffset : Int, count : Int) : Void;
	function uploadFromVector(data : openfl.Vector<UInt>, startOffset : Int, count : Int) : Void;
}
