package openfl.display3D.textures;

extern class TextureBase extends openfl.events.EventDispatcher {
	var frameBuffer : openfl.gl.GLFramebuffer;
	var glTexture : openfl.gl.GLTexture;
	var height : Int;
	var width : Int;
	function new(glTexture : openfl.gl.GLTexture, width : Int = 0, height : Int = 0) : Void;
	function dispose() : Void;
}
