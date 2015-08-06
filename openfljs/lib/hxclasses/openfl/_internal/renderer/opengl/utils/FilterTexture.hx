package openfl._internal.renderer.opengl.utils;

extern class FilterTexture {
	var frameBuffer : lime.graphics.opengl.GLFramebuffer;
	var gl : lime.graphics.GLRenderContext;
	var height : Int;
	var renderBuffer : lime.graphics.opengl.GLRenderbuffer;
	var smoothing : Bool;
	var texture : lime.graphics.opengl.GLTexture;
	var width : Int;
	function new(gl : lime.graphics.GLRenderContext, width : Int, height : Int, smoothing : Bool = false) : Void;
	function clear() : Void;
	function destroy() : Void;
	function resize(width : Int, height : Int) : Void;
}
