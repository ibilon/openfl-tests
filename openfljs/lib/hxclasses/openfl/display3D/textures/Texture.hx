package openfl.display3D.textures;

extern class Texture extends TextureBase {
	var optimizeForRenderToTexture : Bool;
	function new(glTexture : openfl.gl.GLTexture, optimize : Bool, width : Int, height : Int) : Void;
	function uploadCompressedTextureFromByteArray(data : openfl.utils.ByteArray, byteArrayOffset : Int, async : Bool = false) : Void;
	function uploadFromBitmapData(bitmapData : openfl.display.BitmapData, miplevel : Int = 0) : Void;
	function uploadFromByteArray(data : openfl.utils.ByteArray, byteArrayOffset : Int, miplevel : Int = 0) : Void;
	function uploadFromUInt8Array(data : openfl.utils.UInt8Array, miplevel : Int = 0) : Void;
}
