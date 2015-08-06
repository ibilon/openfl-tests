package openfl._internal.renderer.opengl.utils;

extern class BlendModeManager {
	var currentBlendMode : openfl.display.BlendMode;
	var gl : lime.graphics.GLRenderContext;
	function new(gl : lime.graphics.GLRenderContext) : Void;
	function destroy() : Void;
	function setBlendMode(blendMode : openfl.display.BlendMode, force : Null<Bool> = false) : Bool;
}
