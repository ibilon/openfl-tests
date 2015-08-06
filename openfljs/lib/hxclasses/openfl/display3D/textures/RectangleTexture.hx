package openfl.display3D.textures;

extern class RectangleTexture extends TextureBase {
	var optimizeForRenderToTexture : Bool;
	function new(glTexture : openfl.gl.GLTexture, optimize : Bool, width : Int, height : Int) : Void;
	function uploadFromBitmapData(bitmapData : openfl.display.BitmapData, miplevel : Int = 0) : Void;
	function uploadFromByteArray(data : openfl.utils.ByteArray, byteArrayOffset : Int) : Void;
}
