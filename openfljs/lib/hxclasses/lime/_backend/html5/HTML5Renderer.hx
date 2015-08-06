package lime._backend.html5;

@:access(lime.app.Application) @:access(lime.graphics.opengl.GL) @:access(lime.graphics.Renderer) @:access(lime.ui.Window) extern class HTML5Renderer {
	function new(parent : lime.graphics.Renderer) : Void;
	function create() : Void;
	function flip() : Void;
	function render() : Void;
}
