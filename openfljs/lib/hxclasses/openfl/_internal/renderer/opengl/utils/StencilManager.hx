package openfl._internal.renderer.opengl.utils;

import openfl._internal.renderer.opengl.utils.GraphicsRenderer;

@:access(openfl.display.DisplayObject) @:access(openfl.display.Graphics) @:access(openfl.display.BitmapData) @:access(openfl.geom.Matrix) extern class StencilManager {
	var count : Int;
	var gl : lime.graphics.GLRenderContext;
	var reverse : Bool;
	var stencilMask : Int;
	var stencilStack : Array<GLGraphicsData>;
	function new(gl : lime.graphics.GLRenderContext) : Void;
	function bindGraphics(object : openfl.display.DisplayObject, glData : GLGraphicsData, renderSession : openfl._internal.renderer.RenderSession) : Void;
	function destroy() : Void;
	function popBucket(object : openfl.display.DisplayObject, bucket : GLBucket, renderSession : openfl._internal.renderer.RenderSession) : Void;
	function popMask(object : openfl.display.DisplayObject, renderSession : openfl._internal.renderer.RenderSession) : Void;
	function popStencil(object : openfl.display.DisplayObject, glData : GLGraphicsData, renderSession : openfl._internal.renderer.RenderSession) : Void;
	function prepareGraphics(fill : GLBucketData, renderSession : openfl._internal.renderer.RenderSession, translationMatrix : lime.utils.Float32Array) : Void;
	function pushBucket(bucket : GLBucket, renderSession : openfl._internal.renderer.RenderSession, translationMatrix : lime.utils.Float32Array, isMask : Null<Bool> = false) : Void;
	function pushMask(object : openfl.display.DisplayObject, renderSession : openfl._internal.renderer.RenderSession) : Void;
	function pushStencil(object : openfl.display.DisplayObject, glData : GLGraphicsData, renderSession : openfl._internal.renderer.RenderSession) : Void;
	function setContext(gl : lime.graphics.GLRenderContext) : Void;
}
