package openfl._internal.renderer.opengl.shaders;

extern class PatternFillShader extends AbstractShader {
	var alpha : lime.graphics.opengl.GLUniformLocation;
	var offsetVector : lime.graphics.opengl.GLUniformLocation;
	var patternBR : lime.graphics.opengl.GLUniformLocation;
	var patternMatrix : lime.graphics.opengl.GLUniformLocation;
	var patternTL : lime.graphics.opengl.GLUniformLocation;
	var sampler : lime.graphics.opengl.GLUniformLocation;
	var translationMatrix : lime.graphics.opengl.GLUniformLocation;
	function new(gl : lime.graphics.GLRenderContext) : Void;
}
