package openfl._internal.renderer.opengl;

@:access(lime.graphics.opengl.GL) @:access(openfl.display.Stage) @:access(openfl.display.DisplayObject) @:access(openfl.display.Graphics) @:access(openfl.display.BitmapData) @:access(openfl.geom.Matrix) @:access(openfl.geom.Rectangle) extern class GLRenderer extends openfl._internal.renderer.AbstractRenderer {
	var _glContextId : Int;
	var blendModeManager : openfl._internal.renderer.opengl.utils.BlendModeManager;
	var contextLost : Bool;
	var defaultFramebuffer : lime.graphics.opengl.GLFramebuffer;
	var filterManager : openfl._internal.renderer.opengl.utils.FilterManager;
	var gl : lime.graphics.GLRenderContext;
	var maskManager : openfl._internal.renderer.opengl.utils.GLMaskManager;
	var offset : openfl.geom.Point;
	var options : Dynamic;
	var preserveDrawingBuffer : Bool;
	var projection : openfl.geom.Point;
	var projectionMatrix : openfl.geom.Matrix;
	var shaderManager : openfl._internal.renderer.opengl.utils.ShaderManager;
	var spriteBatch : openfl._internal.renderer.opengl.utils.SpriteBatch;
	var stencilManager : openfl._internal.renderer.opengl.utils.StencilManager;
	var view : Dynamic;
	function new(width : Int = 0, height : Int = 0, gl : lime.graphics.GLRenderContext, transparent : Bool = false, antialias : Bool = false, preserveDrawingBuffer : Bool = false) : Void;
	function destroy() : Void;
	function renderDisplayObject(displayObject : openfl.display.DisplayObject, projection : openfl.geom.Point, ?buffer : lime.graphics.opengl.GLFramebuffer) : Void;
	function setOrtho(x : Float, y : Float, width : Float, height : Float) : Void;
	static var glContextId : Int;
	static var glContexts : Array<lime.graphics.GLRenderContext>;
	static function renderBitmap(shape : openfl.display.DisplayObject, renderSession : openfl._internal.renderer.RenderSession) : Void;
}
