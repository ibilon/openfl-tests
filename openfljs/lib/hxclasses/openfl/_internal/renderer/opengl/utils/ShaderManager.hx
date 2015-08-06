package openfl._internal.renderer.opengl.utils;

extern class ShaderManager {
	var currentShader : openfl._internal.renderer.opengl.shaders2.Shader;
	var defaultShader : openfl._internal.renderer.opengl.shaders2.DefaultShader;
	var drawTrianglesShader : openfl._internal.renderer.opengl.shaders2.DrawTrianglesShader;
	var fillShader : openfl._internal.renderer.opengl.shaders2.FillShader;
	var gl : lime.graphics.GLRenderContext;
	var patternFillShader : openfl._internal.renderer.opengl.shaders2.PatternFillShader;
	var primitiveShader : openfl._internal.renderer.opengl.shaders2.PrimitiveShader;
	function new(gl : lime.graphics.GLRenderContext) : Void;
	function destroy() : Void;
	function setContext(gl : lime.graphics.GLRenderContext) : Void;
	function setShader(shader : openfl._internal.renderer.opengl.shaders2.Shader, force : Null<Bool> = false) : Bool;
}
