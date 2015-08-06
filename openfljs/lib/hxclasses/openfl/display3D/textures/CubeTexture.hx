package openfl.display3D.textures;

extern class CubeTexture extends TextureBase {
	var _textures : Array<openfl.gl.GLTexture>;
	var size : Int;
	function new(glTexture : openfl.gl.GLTexture, size : Int) : Void;
	function glTextureAt(index : Int) : openfl.gl.GLTexture;
	function uploadCompressedTextureFromByteArray(data : openfl.utils.ByteArray, byteArrayOffset : Int, async : Bool = false) : Void;
	function uploadFromBitmapData(bitmapData : openfl.display.BitmapData, side : Int, miplevel : Int = 0) : Void;
	function uploadFromByteArray(data : openfl.utils.ByteArray, byteArrayOffset : Int, side : Int, miplevel : Int = 0) : Void;
}
