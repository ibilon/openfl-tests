package openfl._internal.renderer.opengl.utils;

extern class FilterManager {
	var buffer : lime.graphics.opengl.GLFramebuffer;
	var colorArray : lime.utils.Float32Array;
	var colorBuffer : lime.graphics.opengl.GLBuffer;
	var defaultShader : openfl._internal.renderer.opengl.shaders2.DefaultShader;
	var filterStack : Array<Dynamic>;
	var gl : lime.graphics.GLRenderContext;
	var height : Int;
	var indexBuffer : lime.graphics.opengl.GLBuffer;
	var offsetX : Float;
	var offsetY : Float;
	var renderSession : openfl._internal.renderer.RenderSession;
	var texturePool : Array<FilterTexture>;
	var transparent : Bool;
	var uvArray : lime.utils.Float32Array;
	var uvBuffer : lime.graphics.opengl.GLBuffer;
	var vertexArray : lime.utils.Float32Array;
	var vertexBuffer : lime.graphics.opengl.GLBuffer;
	var width : Int;
	function new(gl : lime.graphics.GLRenderContext, transparent : Bool) : Void;
	function applyFilterPass(filter : Dynamic, filterArea : openfl.geom.Rectangle, width : Int, height : Int) : Void;
	function begin(renderSession : openfl._internal.renderer.RenderSession, ?buffer : lime.graphics.opengl.GLFramebuffer) : Void;
	function destroy() : Void;
	function initShaderBuffers() : Void;
	function popFilter() : Void;
	function pushFilter(filterBlock : Dynamic) : Void;
	function setContext(gl : lime.graphics.GLRenderContext) : Void;
}
