package openfl.display;

@:access(lime.graphics.opengl.GL) extern class OpenGLView extends DirectRenderer {
	function new() : Void;
	static var CONTEXT_LOST(inline,never) : String;
	static var CONTEXT_RESTORED(inline,never) : String;
	static var isSupported(get,null) : Bool;
}
