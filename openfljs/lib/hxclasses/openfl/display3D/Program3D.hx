package openfl.display3D;

extern class Program3D {
	var glProgram : openfl.gl.GLProgram;
	function new(program : openfl.gl.GLProgram) : Void;
	function dispose() : Void;
	function upload(vertexShader : openfl.gl.GLShader, fragmentShader : openfl.gl.GLShader) : Void;
}
