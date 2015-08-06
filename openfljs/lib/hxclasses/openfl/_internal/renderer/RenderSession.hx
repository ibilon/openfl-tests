package openfl._internal.renderer;

extern class RenderSession {
	var blendModeManager : openfl._internal.renderer.opengl.utils.BlendModeManager;
	var cairo : lime.graphics.CairoRenderContext;
	var context : lime.graphics.CanvasRenderContext;
	var currentBlendMode : openfl.display.BlendMode;
	var defaultFramebuffer : lime.graphics.opengl.GLFramebuffer;
	var drawCount : Int;
	var element : lime.graphics.DOMRenderContext;
	var filterManager : openfl._internal.renderer.opengl.utils.FilterManager;
	var gl : lime.graphics.GLRenderContext;
	var maskManager : AbstractMaskManager;
	var projectionMatrix : openfl.geom.Matrix;
	var renderer : AbstractRenderer;
	var roundPixels : Bool;
	var shaderManager : openfl._internal.renderer.opengl.utils.ShaderManager;
	var spriteBatch : openfl._internal.renderer.opengl.utils.SpriteBatch;
	var stencilManager : openfl._internal.renderer.opengl.utils.StencilManager;
	var transformOriginProperty : String;
	var transformProperty : String;
	var vendorPrefix : String;
	var z : Int;
	function new() : Void;
}
