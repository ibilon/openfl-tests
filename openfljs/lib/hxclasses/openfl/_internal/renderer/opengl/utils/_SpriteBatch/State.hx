package openfl._internal.renderer.opengl.utils._SpriteBatch;

@:access(openfl.geom.ColorTransform) extern class openfl._internal.renderer.opengl.utils.priv_SpriteBatch.State {
	var blendMode : openfl.display.BlendMode;
	var colorTransform : openfl.geom.ColorTransform;
	var shader : openfl._internal.renderer.opengl.shaders2.Shader;
	var skipColorTransformAlpha : Bool;
	var texture : openfl.gl.GLTexture;
	var textureSmooth : Bool;
	function new() : Void;
	function destroy() : Void;
	function equals(other : openfl._internal.renderer.opengl.utils.priv_SpriteBatch.State) : Bool;
}
