package openfl._internal.renderer.opengl.utils;

extern class GLBucket {
	var alpha : Float;
	var bitmap : openfl.display.BitmapData;
	var color : Array<Float>;
	var dirty : Bool;
	var fillIndex : Int;
	var fills : Array<GLBucketData>;
	var gl : lime.graphics.GLRenderContext;
	var glTile : openfl.utils.Int16Array;
	var graphicType : GraphicType;
	var lastIndex : Int;
	var lines : Array<GLBucketData>;
	var mode : BucketMode;
	var overrideMatrix : openfl.geom.Matrix;
	var texture : openfl.gl.GLTexture;
	var textureBR : openfl.geom.Point;
	var textureMatrix : openfl.geom.Matrix;
	var textureRepeat : Bool;
	var textureSmooth : Bool;
	var textureTL : openfl.geom.Point;
	var tile : Array<Int>;
	var tileBuffer : lime.graphics.opengl.GLBuffer;
	var uploadTileBuffer : Bool;
	function new(gl : lime.graphics.GLRenderContext) : Void;
	function getData(type : BucketDataType) : GLBucketData;
	function optimize() : Void;
	function reset() : Void;
	function upload() : Void;
	function uploadTile(x : Int, y : Int, w : Int, h : Int) : Void;
}
