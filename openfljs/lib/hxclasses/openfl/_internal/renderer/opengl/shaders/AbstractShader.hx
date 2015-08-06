package openfl._internal.renderer.opengl.shaders;

extern class AbstractShader {
	var _UID : Int;
	var aTextureCoord : Int;
	var aVertexPosition : Int;
	var attributes : Array<Int>;
	var colorAttribute : Int;
	var fragmentSrc : Array<String>;
	var gl : lime.graphics.GLRenderContext;
	var program : lime.graphics.opengl.GLProgram;
	var projectionVector : lime.graphics.opengl.GLUniformLocation;
	var uniforms : Map<String,Dynamic>;
	var vertexSrc : Array<String>;
	function destroy() : Void;
	function init() : Void;
	static function CompileFragmentShader(gl : lime.graphics.GLRenderContext, shaderSrc : {join : String -> String}) : lime.graphics.opengl.GLShader;
	static function CompileVertexShader(gl : lime.graphics.GLRenderContext, shaderSrc : {join : String -> String}) : lime.graphics.opengl.GLShader;
	static function _CompileShader(gl : lime.graphics.GLRenderContext, shaderSrc : {join : String -> String}, shaderType : Int) : lime.graphics.opengl.GLShader;
	static function compileProgram(gl : lime.graphics.GLRenderContext, vertexSrc : {join : String -> String}, fragmentSrc : {join : String -> String}) : Dynamic;
}
