package lime._backend.html5;

@:access(lime._backend.html5.HTML5Window) @:access(lime.app.Application) @:access(lime.graphics.Renderer) @:access(lime.ui.Window) extern class HTML5Application {
	function new(parent : lime.app.Application) : Void;
	function create(config : lime.app.Config) : Void;
	@:has_untyped function exec() : Int;
	function getFrameRate() : Float;
	function setFrameRate(value : Float) : Float;
}
