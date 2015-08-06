package lime._backend.html5;

extern class HTML5Window {
	var canvas : js.html.CanvasElement;
	var div : js.html.DivElement;
	var element : js.html.Element;
	function new(parent : lime.ui.Window) : Void;
	function close() : Void;
	function create(application : lime.app.Application) : Void;
	function getDisplay() : lime.system.Display;
	function getEnableTextEvents() : Bool;
	function move(x : Int, y : Int) : Void;
	function resize(width : Int, height : Int) : Void;
	function setEnableTextEvents(value : Bool) : Bool;
	function setFullscreen(value : Bool) : Bool;
	function setIcon(image : lime.graphics.Image) : Void;
	function setMinimized(value : Bool) : Bool;
	function setTitle(value : String) : String;
}
