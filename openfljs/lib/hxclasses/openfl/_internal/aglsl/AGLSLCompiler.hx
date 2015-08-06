package openfl._internal.aglsl;

extern class AGLSLCompiler {
	var glsl : String;
	function new() : Void;
	function compile(programType : String, source : String) : String;
}
