package openfl._internal.renderer.opengl.utils;

extern class GLStack {
	var buckets : Array<GLBucket>;
	var gl : lime.graphics.GLRenderContext;
	var lastIndex : Int;
	function new(gl : lime.graphics.GLRenderContext) : Void;
	function reset() : Void;
	function upload() : Void;
}
