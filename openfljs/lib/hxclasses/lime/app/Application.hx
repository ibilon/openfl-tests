package lime.app;

extern class Application extends Module {
	var config(default,null) : Config;
	var frameRate(get,set) : Float;
	var modules(default,null) : Array<IModule>;
	var onUpdate : Event<Int -> Void>;
	var renderer(get,null) : lime.graphics.Renderer;
	var renderers(default,null) : Array<lime.graphics.Renderer>;
	var window(get,null) : lime.ui.Window;
	var windows(default,null) : Array<lime.ui.Window>;
	function new() : Void;
	function addModule(module : IModule) : Void;
	function addRenderer(renderer : lime.graphics.Renderer) : Void;
	function addWindow(window : lime.ui.Window) : Void;
	function create(config : Config) : Void;
	function exec() : Int;
	function removeModule(module : IModule) : Void;
	function removeRenderer(renderer : lime.graphics.Renderer) : Void;
	function removeWindow(window : lime.ui.Window) : Void;
	static var current(default,null) : Application;
}
