package lime.utils;

extern class GLUtils {
	static function compileShader(source : String, type : Int) : lime.graphics.opengl.GLShader;
	static function createProgram(vertexSource : String, fragmentSource : String) : lime.graphics.opengl.GLProgram;
}
