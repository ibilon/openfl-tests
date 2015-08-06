package openfl.display3D._shaders;

extern class openfl.display3D.priv_shaders.AGLSLShaderUtils {
	static function compile(programType : String, source : String) : openfl.utils.ByteArray;
	static function createShader(type : openfl.display3D.Context3DProgramType, shaderSource : String) : openfl.display3D.priv_shaders.Shader;
}
