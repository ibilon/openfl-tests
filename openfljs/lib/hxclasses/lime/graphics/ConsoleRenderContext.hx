package lime.graphics;

extern class ConsoleRenderContext {
	function new() : Void;
	function clear() : Void;
	function clearColor(r : Float, g : Float, b : Float, a : Float) : Void;
	function clearDepth(depth : Float) : Void;
	function clearStencil(stencil : Int) : Void;
}
