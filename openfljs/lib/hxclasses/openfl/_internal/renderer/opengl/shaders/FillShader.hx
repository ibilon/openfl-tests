package openfl._internal.renderer.opengl.shaders;

extern class FillShader extends AbstractShader {
	var alpha : lime.graphics.opengl.GLUniformLocation;
	var color : lime.graphics.opengl.GLUniformLocation;
	var offsetVector : lime.graphics.opengl.GLUniformLocation;
	var translationMatrix : lime.graphics.opengl.GLUniformLocation;
	function new(gl : lime.graphics.GLRenderContext) : Void;
}
