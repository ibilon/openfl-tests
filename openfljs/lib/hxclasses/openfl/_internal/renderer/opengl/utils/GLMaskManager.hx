package openfl._internal.renderer.opengl.utils;

extern class GLMaskManager extends openfl._internal.renderer.AbstractMaskManager {
	var gl : lime.graphics.GLRenderContext;
	function new(renderSession : openfl._internal.renderer.RenderSession) : Void;
	function destroy() : Void;
	function setContext(gl : lime.graphics.GLRenderContext) : Void;
}
