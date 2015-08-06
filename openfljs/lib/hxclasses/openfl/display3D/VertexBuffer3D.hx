package openfl.display3D;

extern class VertexBuffer3D {
	var data32PerVertex : Int;
	var glBuffer : openfl.gl.GLBuffer;
	var numVertices : Int;
	function new(glBuffer : openfl.gl.GLBuffer, numVertices : Int, data32PerVertex : Int) : Void;
	function dispose() : Void;
	function uploadFromByteArray(byteArray : openfl.utils.ByteArray, byteArrayOffset : Int, startOffset : Int, count : Int) : Void;
	function uploadFromFloat32Array(data : openfl.utils.Float32Array, startVertex : Int, numVertices : Int) : Void;
	function uploadFromVector(data : openfl.Vector<Float>, startVertex : Int, numVertices : Int) : Void;
}
