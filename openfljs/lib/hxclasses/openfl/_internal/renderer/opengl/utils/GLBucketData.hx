package openfl._internal.renderer.opengl.utils;

extern class GLBucketData {
	var available : Bool;
	var drawMode : Int;
	var gl : lime.graphics.GLRenderContext;
	var glIndices : lime.utils.UInt16Array;
	var glLength : Int;
	var glStart : Int;
	var glVerts : lime.utils.Float32Array;
	var indexBuffer : lime.graphics.opengl.GLBuffer;
	var indices : Array<Int>;
	var lastVertsSize : Int;
	var parent : GLBucket;
	var rawIndices : Bool;
	var rawVerts : Bool;
	var stride : Int;
	var type : BucketDataType;
	var vertexArray : VertexArray;
	var verts : Array<Float>;
	function new(gl : lime.graphics.GLRenderContext) : Void;
	function reset() : Void;
	function upload() : Void;
}
