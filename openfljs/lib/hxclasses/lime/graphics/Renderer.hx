package lime.graphics;

extern class Renderer {
	var context : RenderContext;
	var onRender : lime.app.Event<RenderContext -> Void>;
	var onRenderContextLost : lime.app.Event<Void -> Void>;
	var onRenderContextRestored : lime.app.Event<RenderContext -> Void>;
	var window : lime.ui.Window;
	function new(window : lime.ui.Window) : Void;
	function create() : Void;
	function flip() : Void;
}
