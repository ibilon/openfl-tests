package openfl._internal.renderer.opengl.utils;

extern class VertexArray {
	var attributes : Array<VertexAttribute>;
	var buffer : openfl.utils.ArrayBuffer;
	var gl : lime.graphics.GLRenderContext;
	var glBuffer : openfl.gl.GLBuffer;
	var isStatic : Bool;
	var size : Int;
	var stride(get,never) : Int;
	function new(attributes : Array<VertexAttribute>, size : Null<Int> = 0, isStatic : Bool = false) : Void;
	function bind() : Void;
	function destroy() : Void;
	function setContext(gl : lime.graphics.GLRenderContext, view : openfl.utils.ArrayBufferView) : Void;
	function unbind() : Void;
	function upload(view : openfl.utils.ArrayBufferView) : Void;
}
