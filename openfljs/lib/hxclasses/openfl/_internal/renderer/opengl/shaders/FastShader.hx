package openfl._internal.renderer.opengl.shaders;

extern class FastShader extends AbstractShader {
	var aPositionCoord : Int;
	var aRotation : Int;
	var aScale : Int;
	var dimensions : lime.graphics.opengl.GLUniformLocation;
	var offsetVector : lime.graphics.opengl.GLUniformLocation;
	var textureCount : Int;
	var uMatrix : lime.graphics.opengl.GLUniformLocation;
	var uSampler : lime.graphics.opengl.GLUniformLocation;
	function new(gl : lime.graphics.GLRenderContext) : Void;
}
