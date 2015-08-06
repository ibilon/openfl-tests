package openfl._internal.renderer.opengl.utils;

@:access(openfl.display.BitmapData) @:access(openfl.display.Graphics) @:access(openfl.display.DisplayObject) @:access(openfl.display.Tilesheet) @:access(openfl.geom.Matrix) extern class SpriteBatch {
	var clipRect:openfl.geom.Rectangle;
	var drawing : Bool;
	var gl : lime.graphics.GLRenderContext;
	function new(gl : lime.graphics.GLRenderContext, maxSprites : Int = 0) : Void;
	function begin(renderSession : openfl._internal.renderer.RenderSession, ?clipRect : openfl.geom.Rectangle) : Void;
	function destroy() : Void;
	function finish() : Void;
	function renderBitmapData(bitmapData : openfl.display.BitmapData, smoothing : Bool, matrix : openfl.geom.Matrix, ct : openfl.geom.ColorTransform, alpha : Null<Float> = 0, ?blendMode : openfl.display.BlendMode, ?pixelSnapping : openfl.display.PixelSnapping, bgra : Bool = false) : Void;
	function renderCachedGraphics(object : openfl.display.DisplayObject) : Void;
	function renderTiles(object : openfl.display.DisplayObject, sheet : openfl.display.Tilesheet, tileData : Array<Float>, smooth : Bool = false, flags : Int = 0, count : Int = 0) : Void;
	function setContext(gl : lime.graphics.GLRenderContext) : Void;
	function start(?clipRect : openfl.geom.Rectangle) : Void;
	function stop() : Void;
}
