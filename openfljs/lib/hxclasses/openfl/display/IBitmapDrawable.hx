package openfl.display;

extern interface IBitmapDrawable {
	var __worldColorTransform : openfl.geom.ColorTransform;
	var __worldTransform : openfl.geom.Matrix;
	function __renderCairo(renderSession : openfl._internal.renderer.RenderSession) : Void;
	function __renderCairoMask(renderSession : openfl._internal.renderer.RenderSession) : Void;
	function __renderCanvas(renderSession : openfl._internal.renderer.RenderSession) : Void;
	function __renderCanvasMask(renderSession : openfl._internal.renderer.RenderSession) : Void;
	function __renderGL(renderSession : openfl._internal.renderer.RenderSession) : Void;
	function __updateChildren(transformOnly : Bool) : Void;
	function __updateMask(maskGraphics : Graphics) : Void;
}
