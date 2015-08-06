package openfl._internal.renderer.opengl.shaders;

extern class DefaultShader extends AbstractShader {
	var dimensions : lime.graphics.opengl.GLUniformLocation;
	var offsetVector : lime.graphics.opengl.GLUniformLocation;
	var textureCount : Int;
	var uSampler : lime.graphics.opengl.GLUniformLocation;
	function new(gl : lime.graphics.GLRenderContext) : Void;
	function initSampler2D(uniform : Dynamic) : Void;
	function initUniforms() : Void;
	function syncUniforms() : Void;
	static var defaultVertexSrc : Array<String>;
}
